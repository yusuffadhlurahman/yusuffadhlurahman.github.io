///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dojo/on',
  'dojo/Deferred',
  'dojo/keys',
  'dijit/_WidgetBase',
  "dijit/_TemplatedMixin",
  "dijit/_WidgetsInTemplateMixin",
  "dojo/Evented",
  "dojo/text!./templates/StartPage.html",
  'dojo/dom-class',
  'dojo/query',
  'esri/lang',
  './Review',
  'jimu/LayerInfos/LayerInfos',
  'jimu/utils',
  'jimu/dijit/formSelect'
],
  function (declare,
    lang,
    array,
    on,
    Deferred,
    keys,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    Evented,
    template,
    domClass,
    query,
    esriLang,
    Review,
    LayerInfos,
    jimuUtils) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
      baseClass: 'cf-startpage',
      declaredClass: 'CriticalFacilities.StartPage',
      templateString: template,
      _started: null,
      label: 'StartPage',
      parent: null,
      nls: null,
      map: null,
      appConfig: null,
      config: null,
      theme: '',
      styleColor: '',
      state: 'mapping', //mapping or review...helps control what happens for various apsects of view navigation
      csvStore: null,
      _syncFields: {},
      singleEnabled: false,
      multiEnabled: false,
      xyEnabled: false,

      constructor: function (options) {
        lang.mixin(this, options);
      },

      postCreate: function () {
        this.inherited(arguments);
        LayerInfos.getInstance(this.map, this.map.itemInfo).then(lang.hitch(this, function (infos) {
          this.operLayerInfos = infos;
          this.populateTargetLayerSelector();
          this.own(on(this.targetLayerSelector, "change", lang.hitch(this, function (selectedTargetLayer) {
            this.emit("targetLayerChanged", selectedTargetLayer);
          })));
        }));
      },

      startup: function () {
        this._started = true;
        this.pageContainer.backDisabled = this.pageContainer._backLabels.length > 0 ? false : true;
        this.updateImageNodes();
        this.lastFocusNode = this.fieldMappingRow;
      },

      populateTargetLayerSelector: function () {
        var layerSettings = this.config.layerSettings;
        var targetLayeroptions = [];
        //for backward compatibility only one layer will be present, convert layersettings object to array
        if (layerSettings && layerSettings.layerInfo && layerSettings.layerInfo.featureLayer) {
          layerSettings = [layerSettings]
        }
        for (var i = 0; i < layerSettings.length; i++) {
          var layerInfo;
          if (layerSettings[i] && layerSettings[i].layerInfo && layerSettings[i].layerInfo.featureLayer) {
            layerInfo = this.operLayerInfos.getLayerInfoById(layerSettings[i].layerInfo.featureLayer.id);
          }
          //if we have a config layer set it otherwise just expand the chooser
          if (layerInfo && layerInfo.layerObject.isEditable()) {
            targetLayeroptions.push({
              label: layerInfo.title,
              value: layerInfo.id
            });
          }
        }
        this.targetLayerSelector.set('options', targetLayeroptions);
        if (targetLayeroptions.length > 0) {
          this.targetLayerSelector.set('value', targetLayeroptions[0].value);
        }
      },

      onShown: function () {
        this._initDependencies();
        this._validateStatus();
        this.pageContainer.backDisabled = this.pageContainer._backLabels.length > 0 ? false : true;
      },

      setStyleColor: function (styleColor) {
        this.styleColor = styleColor;
      },

      updateImageNodes: function () {
        //toggle white/black images
        if (this.pageContainer) {
          var isDark = this.pageContainer.isDarkTheme;
          var removeClass = isDark ? 'next-arrow-img' : 'next-arrow-img-white';
          var addClass = isDark ? 'next-arrow-img-white' : 'next-arrow-img';
          var imageNodes = query('.' + removeClass, this.domNode);
          array.forEach(imageNodes, function (node) {
            domClass.remove(node, removeClass);
            domClass.add(node, addClass);
          });
        }
      },

      validate: function (type, result) {
        var def = new Deferred();
        if (type === 'next-view') {
          def.resolve(this._nextView(result));
        } else if (type === 'back-view') {
          def.resolve(this._backView());
        } else if (type === 'home-view') {
          this._homeView(result).then(function (v) {
            def.resolve(v);
          });
        }
        return def;
      },

      _nextView: function (nextResult) {
        if (nextResult.navView.label === this.label) {
          this.pageContainer.toggleController(false);
        }
        if (this.parent._locationMappingComplete && this.parent._fieldMappingComplete) {
          this.nextDisabled = true;
          return false;
        }
        this.pageContainer.backDisabled = false;
        return true;
      },

      _backView: function () {
        return this.pageContainer._backLabels.length > 0;
      },

      _homeView: function (backResult) {
        var def = new Deferred();
        var homeView = this.pageContainer.getViewByTitle('Home');
        homeView.verifyClearSettings(backResult).then(function (v) {
          def.resolve(v);
        });
        return def;
      },

      _locationMappingClick: function (evt) {
        if (evt.type === "keydown" && (evt.keyCode !== keys.ENTER && evt.keyCode !== keys.SPACE)) {
          return;
        }
        this._validateStatus();
        var title;
        if (this.xyEnabled && (this.multiEnabled || this.singleEnabled)) {
          title = 'LocationType';
        } else {
          title = this.xyEnabled ? 'Coordinates' : 'Addresses';
        }
        this._setViewByTitle(title);
      },

      _schemaMappingClick: function (evt) {
        if (evt.type === "keydown" && (evt.keyCode !== keys.ENTER && evt.keyCode !== keys.SPACE)) {
          return;
        }
        this._validateStatus();
        this._setViewByTitle('FieldMapping');
      },

      _setViewByTitle: function (title) {
        var view = this.pageContainer.getViewByTitle(title);
        this.pageContainer.selectView(view.index);
      },

      _initDependencies: function () {
        //this view needs to respond to changes in status of _fieldMappingComplete and _locationMappingComplete
        // as reported by the parent widget
        //Coordinates, Addresses, and FieldMapping views can alter the state of these properties and will
        // emit an event when they do so this just needs to respond
        if (this.pageContainer && !this._coordinatesView && !this._addressView && !this._fieldMappingView) {
          if (this.xyEnabled) {
            this._coordinatesView = this.pageContainer.getViewByTitle('Coordinates');
            this.own(on(this._coordinatesView, 'location-mapping-update', lang.hitch(this, function (v) {
              this.parent._locationMappingComplete = v;
              this._validateStatus();
            })));
          }

          if (this.singleEnabled || this.multiEnabled) {
            this._addressView = this.pageContainer.getViewByTitle('Addresses');
            this.own(on(this._addressView, 'location-mapping-update', lang.hitch(this, function (v) {
              this.parent._locationMappingComplete = v;
              this._validateStatus();
            })));
          }

          this._fieldMappingView = this.pageContainer.getViewByTitle('FieldMapping');
          this.own(on(this._fieldMappingView, 'field-mapping-update', lang.hitch(this, function (v) {
            this.parent._fieldMappingComplete = v;
            this._validateStatus();
          })));

          if (this.xyEnabled && (this.singleEnabled || this.multiEnabled)) {
            this._locationTypeView = this.pageContainer.getViewByTitle('LocationType');
          } else if (this.xyEnabled) {
            this._locationTypeView = this._coordinatesView;
          } else {
            this._locationTypeView = this._addressView;
          }
          if (this._locationTypeView && !this.parent._locationMappingComplete) {
            this.altNextIndex = this._locationTypeView.index;
          }
        }
      },
      
      _updateDoneStatus: function (node, complete) {
        //toggle complete checkmark and error icon
        if (complete) {
            domClass.remove(node, 'jimu-icon jimu-icon-error incomplete-mark');
            domClass.add(node, 'done-mark');
        } else {
          domClass.add(node, 'jimu-icon jimu-icon-error incomplete-mark');
          domClass.remove(node, 'done-mark');
        }
      },

      _validateStatus: function () {
        //show/check mark to indicate complete status
        this._updateDoneStatus(this.locationMappingComplete, this.parent._locationMappingComplete);
        this._updateDoneStatus(this.fieldMappingComplete, this.parent._fieldMappingComplete);
        this.pageContainer.backDisabled = false;
        //When both are complete enable add to map...otherwise set the altNextIndex so we can navigate to the
        // appropriate next page
        var enableOk = false;
        if (this.parent._locationMappingComplete && this.parent._fieldMappingComplete && this.state === 'mapping') {
          enableOk = true;
          this.pageContainer.nextDisabled = true;
        } else if (!this.parent._locationMappingComplete && this._locationTypeView) {
          this.altNextIndex = this._locationTypeView.index;
        } else if (!this.parent._fieldMappingComplete && this._fieldMappingView) {
          this.altNextIndex = this._fieldMappingView.index;
        }
        if (!enableOk) {
          this.pageContainer.nextDisabled = false;
        }
        this._updateNode(this.addToMapButton, enableOk);
        //update last focus node
        if(enableOk){
          this.lastFocusNode = this.addToMapButton;
        } else{
          this.lastFocusNode = this.fieldMappingRow;
        }
      },

      _updateNode: function (node, complete) {
        //toggle complete checkmark or add to map button
        if (complete) {
          if (domClass.contains(node, 'display-none')) {
            domClass.remove(node, 'display-none');
          }
        } else {
          if (!domClass.contains(node, 'display-none')) {
            domClass.add(node, 'display-none');
          }
        }
      },

      _addToMapClick: function (evt) {
        if (evt.type === "keydown" && (evt.keyCode !== keys.ENTER && evt.keyCode !== keys.SPACE)) {
          return;
        }
        this._updateNode(this.addToMapButton, false);
        this._updateNode(this.progressNode, true);

        var fieldMappingResults = this._fieldMappingView._getResults();
        var locationResults = this._locationTypeView._getResults();
        this._syncFields = this._checkFields(fieldMappingResults.results, locationResults);
        this._locateFeatures(fieldMappingResults, locationResults);
      },

      _checkFields: function (fieldMappingResults, locationResults) {
        //test if same field is chosen for location and fieldmapping
        var matchingFields = {};
        if (locationResults && locationResults.fields) {
          array.forEach(locationResults.fields, function (field) {
            //may just update coordinates to use the same words
            var fieldValue = field.value ? field.value : field.sourceField;
            var keyField = field.keyField ? field.keyField : field.sourceField;
            if (typeof (fieldValue) !== 'undefined' && typeof (keyField) !== 'undefined') {
              if (!matchingFields.hasOwnProperty(fieldValue)) {
                if (fieldMappingResults) {
                  var fieldMappingKeys = Object.keys(fieldMappingResults);
                  for (var i = 0; i < fieldMappingKeys.length; i++) {
                    if (fieldMappingResults[fieldMappingKeys[i]] === fieldValue) {
                      matchingFields[keyField] = {
                        layerFieldName: fieldMappingKeys[i]
                      };
                      break;
                    }
                  }
                }
              }
            }
          });
        }
        return matchingFields;
      },

      _locateFeatures: function (fieldMappingResults, locationResults) {

        this.csvStore.useMultiFields = locationResults.type === 'multi' ? true : false;
        this.csvStore.mappedArrayFields = fieldMappingResults.results;
        this.csvStore.labelField = fieldMappingResults.labelField;

        if (locationResults.type === 'single') {
          this.csvStore.addrFieldName = locationResults.fields[0].keyField;
          this.csvStore.singleFields = locationResults.fields;
        } else if (locationResults.type === 'multi') {
          this.csvStore.multiFields = locationResults.fields;
        } else if (locationResults.type === 'xy') {
          //Set xy field properties on csvStore
          //this.csvStore.useMultiFields = false;
          this.csvStore.useAddr = false;
          var f = locationResults.fields[0];
          var _f = locationResults.fields[1];
          this.csvStore.xFieldName = f.targetField === 'X' ? f.sourceField : _f.sourceField;
          this.csvStore.yFieldName = _f.targetField === 'Y' ? _f.sourceField : f.sourceField;
        }

        this.csvStore.processForm().then(lang.hitch(this, function (results) {
          //add the result view
          this._addResultView({
            matchedFeatures: this._formatFeatures(results.matchedLayer, fieldMappingResults.labelField),
            matchedLayer: results.matchedLayer,
            unMatchedFeatures: this._formatFeatures(results.unMatchedLayer, fieldMappingResults.labelField),
            unMatchedLayer: results.unMatchedLayer,
            duplicateFeatures: this._formatFeatures(results.duplicateLayer,
              fieldMappingResults.labelField, results.duplicateLookupList),
            duplicateLayer: results.duplicateLayer
          });

          this.state = 'review';

          this._reviewView = this.pageContainer.getViewByTitle('Review');

          this.pageContainer.nextDisabled = false;
          this.pageContainer.backDisabled = true;
          this.pageContainer._backLabels = [];
          //TODO may revive this at some level for a quick link but will be based on some
          // other element on the page other than the home button..still thinking through it
          this.pageContainer.altHomeIndex = this._reviewView.index;

          this._updateNode(this.progressNode, false);
          this.pageContainer.selectView(this._reviewView.index, true);
          this.pageContainer._backLabels = [];

        }), lang.hitch(this, function (err) {
          console.log(err);
          this._updateNode(this.progressNode, false);
          //as error occurred show add to map button so that user can try again to locate features
          this._updateNode(this.addToMapButton, true);
        }));
      },

      _formatFeatures: function (layer, keyField, duplicateLookupList) {
        var features = [];
        if (layer) {
          var oidField = layer.objectIdField;
          this._currentFields = layer.fields;
          array.forEach(layer.graphics, lang.hitch(this, function (g) {
            var fieldInfo = [];
            var duplicateFieldInfos;
            if (duplicateLookupList) {
              duplicateFieldInfos = duplicateLookupList[g.attributes[oidField]];
            }
            array.forEach(Object.keys(g.attributes), lang.hitch(this, function (k) {
              var _field = this._currentFields.filter(function (f) {
                return f.name === k;
              });
              var _v = g.attributes[k];
              var _f = false;
              if (this.csvStore.decimalSeperator !== '.') {
                _f = _field && _field.hasOwnProperty('length') && _field.length === 1 &&
                  _field[0].hasOwnProperty('type') && _field[0].type === 'esriFieldTypeDouble';
                if (_f) {
                  _v = [null, undefined, ''].indexOf(_v) === -1 ?
                    _v.toString().replace(this.csvStore.decimalSeperator, '.') : _v;
                }
              }
              var fi = {
                name: k,
                label: (_field && _field.hasOwnProperty('length') && _field.length === 1 && _field[0].alias) ?
                  _field[0].alias : k,
                formattedValue: _f && [null, undefined].indexOf(_v) === -1 ? jimuUtils.localizeNumber(_v) : _v,
                value: _v,
                needsFormat: _f
              };
              if (duplicateFieldInfos) {
                fi.duplicateFieldInfo = {
                  value: duplicateFieldInfos[k]
                };
              }
              fieldInfo.push(fi);
            }));

            var _labelField = fieldInfo.filter(function (f) {
              return f.name === keyField && f.needsFormat;
            });

            features.push({
              label: (_labelField && _labelField.hasOwnProperty('length') && _labelField.length === 1) ?
                _labelField[0].formattedValue : g.attributes[keyField],
              fieldInfo: fieldInfo,
              geometry: g.geometry,
              address: ''
            });
          }));
        }
        return features;
      },

      _addResultView: function (results) {
        var r = new Review({
          nls: this.nls,
          map: this.map,
          parent: this.parent,
          config: this.config,
          appConfig: this.appConfig,
          matchedList: results.matchedFeatures,
          unMatchedList: results.unMatchedFeatures,
          duplicateList: results.duplicateFeatures,
          theme: this.theme,
          csvStore: this.csvStore,
          editLayer: this.parent.editLayer,
          matchedLayer: results.matchedLayer,
          unMatchedLayer: results.unMatchedLayer,
          duplicateLayer: results.duplicateLayer,
          duplicateLookupList: results.duplicateLookupList,
          _syncFields: this._syncFields
        });
        this.pageContainer.addView(r);

        this._zoomToAllFeatures([results.matchedLayer, results.unMatchedLayer, results.duplicateLayer]);
      },

      _zoomToAllFeatures: function (resultsArray) {
        var allFeatures = [];
        array.forEach(resultsArray, function (results) {
          if (results && results.graphics) {
            for (var i = 0; i < results.graphics.length; i++) {
              allFeatures.push(results.graphics[i]);
            }
          }
        });
        this.csvStore._zoomToData(allFeatures);
      }
    });
  });