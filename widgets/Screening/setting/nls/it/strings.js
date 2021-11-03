﻿///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Piedi quadrati",
    "areaAcresUnit": "Acri",
    "areaSquareMetersUnit": "Metri quadrati",
    "areaSquareKilometersUnit": "Chilometri quadrati",
    "areaHectaresUnit": "Ettari",
    "areaSquareMilesUnit": "Miglia quadrate",
    "lengthFeetUnit": "Piedi",
    "lengthMilesUnit": "Miglia",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Chilometri"
  },
  "analysisTab": {
    "analysisTabLabel": "Analisi",
    "selectAnalysisLayerLabel": "Layer di analisi",
    "addLayerLabel": "Aggiungi layer",
    "noValidLayersForAnalysis": "Nessun layer valido trovato nella mappa Web selezionata.",
    "noValidFieldsForAnalysis": "Nessun campo valido trovato nella mappa Web selezionata. Rimuovere il layer selezionato.",
    "allowGroupingLabel": "Le feature raggruppate per campo con lo stesso valore",
    "groupingHintDescription": "Suggerimento: per impostazione predefinita tutte le feature con lo stesso valore per i campi selezionati verranno raggruppate per apparire come un unico elemento nel report. Disabilitare il raggruppamento per attributi simili per visualizzare un elemento per ogni feature.",
    "addLayersHintText": "Suggerimento: scegliere i layer e i campi da includere nell'analisi e nel report",
    "queryCapabilityHintText": "Solo i layer con funzionalità di interrogazione verranno elencati",
    "addLayerNameTitle": "Nome layer",
    "addFieldsLabel": "Aggiungi campo",
    "addFieldsPopupTitle": "Seleziona campi",
    "addFieldsNameTitle": "Nomi campi",
    "aoiToolsLegendLabel": "Strumenti area di interesse",
    "aoiToolsDescriptionLabel": "Scegliere ed etichettare gli strumenti disponibili per creare l'area di interesse.",
    "placenameLabel": "Nome località",
    "drawToolsLabel": "Scegli strumenti di disegno",
    "uploadShapeFileLabel": "Carica uno shapefile",
    "coordinatesLabel": "Coordinate",
    "coordinatesDrpDwnHintText": "Suggerimento: selezionare l'unità per visualizzare le traverse inserite",
    "coordinatesBearingDrpDwnHintText": "Suggerimento: selezionare il rilevamento per visualizzare le traverse inserite",
    "allowShapefilesUploadLabel": "Consenti agli utenti di caricare shapefile da includere nell'analisi",
    "allowShapefilesUploadLabelHintText": "Suggerimento: aggiungere un'opzione alla scheda Report in cui gli utenti possono caricare i propri dati come shapefile da includere nel report di analisi",
    "allowVisibleLayerAnalysisLabel": "Non analizzare o riportare i risultati per i layer che non sono visibili",
    "allowVisibleLayerAnalysisHintText": "Suggerimento: i layer che sono stati disattivati o che non sono visibili a causa di impostazioni di visibilità in scala non saranno analizzati o inclusi nei risultati stampati o scaricati.",
    "areaUnitsLabel": "Unità per risultati di analisi (Area)",
    "lengthUnitsLabel": "Unità per risultati di analisi (Lunghezza)",
    "maxFeatureForAnalysisLabel": "Numero massimo di feature da analizzare",
    "maxFeatureForAnalysisHintText": "Suggerimento: impostare il numero massimo di feature da includere nell'analisi",
    "searchToleranceLabelText": "Tolleranza di ricerca",
    "searchToleranceHint": "Suggerimento: la tolleranza di ricerca viene impiegata solo per l'analisi di input puntuali e lineari",
    "placenameButtonText": "Nome località",
    "drawToolsButtonText": "Disegna",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordinate",
    "invalidLayerErrorMsg": "Configurare i campi per",
    "drawToolSelectableLayersLabel": "Scegliere layer selezionabili",
    "drawToolSelectableLayersHint": "Suggerimento: selezionare i layer che contengono le feature selezionabili con lo strumento Seleziona disegno",
    "drawToolsSettingsFieldsetLabel": "Disegna Strumenti",
    "drawToolPointLabel": "Puntuale",
    "drawToolPolylineLabel": "Polilineare",
    "drawToolExtentLabel": "Estensione",
    "drawToolPolygonLabel": "Poligonale",
    "drawToolCircleLabel": "Cerchio",
    "selectDrawToolsText": "Scegliere gli strumenti di disegno disponibili per creare l'area di interesse",
    "selectingDrawToolErrorMessage": "Scegliere almeno uno strumento di disegno o layer di selezione per utilizzare l’opzione  Strumenti di disegno per Strumenti AOI."
  },
  "downloadTab": {
    "downloadLegend": "Impostazioni di download",
    "reportLegend": "Impostazioni report",
    "downloadTabLabel": "Scarica",
    "syncEnableOptionLabel": "Feature Layer",
    "syncEnableOptionHint": "Suggerimento: scegliere i layer che possono essere scaricati e specificare i formati in cui ogni layer è disponibile. I dataset scaricati includeranno le feature che intersecano l'area di interesse.",
    "syncEnableOptionNote": "Nota: i download di file geodatabase e shapefile richiedono feature layer abilitati per la sincronizzazione. Il formato shapefile è supportato solo con feature layer hosted ArcGIS Online.",
    "extractDataTaskOptionLabel": "Servizio di geoprocessing Estrai attività dati",
    "extractDataTaskOptionHint": "Suggerimento: impiegare un servizio di geoprocessing Estrai attività dati per scaricare feature che intersecano l'area di interesse in formati file geodatabase o shapefile.",
    "cannotDownloadOptionLabel": "Disabilita download",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nome layer",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Consenti download"
    },
    "setButtonLabel": "Imposta",
    "GPTaskLabel": "Specificare l'url che rimanda al servizio di geoprocessing",
    "printGPServiceLabel": "URL servizio di stampa",
    "setGPTaskTitle": "Specificare l'URL richiesto al servizio di geoprocessing",
    "logoLabel": "Logo",
    "logoChooserHint": "Suggerimento: fare clic sull'icona dell'immagine per cambiare il logo mostrato nell'angolo in alto a sinistra del report",
    "footnoteLabel": "Nota a piè di pagina",
    "columnTitleColorPickerLabel": "Colore titolo colonna Report",
    "reportTitleLabel": "Titolo report",
    "displaySummaryLabel": "Visualizzare riepilogo",
    "hideZeroValueRowLabel": "Nascondere righe con valore 0 per tutti i campi di analisi",
    "hideNullValueRowLabel": "Nascondere righe senza valori dati (null o vuoto) per tutti i campi di analisi",
    "errorMessages": {
      "invalidGPTaskURL": "Servizio di geoprocessing non valido. Selezionare un servizio di geoprocessing qualsiasi contenente Estrai attività dati.",
      "noExtractDataTaskURL": "Selezionare un servizio di geoprocessing qualsiasi contenente Estrai attività dati.",
      "duplicateCustomOption": "Elemento duplicato per ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Larghezza non valida per ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Altezza non valida per ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unità di pagina non valida selezionata per ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Errore durante il recupero delle informazioni dimensionali del progetto. Riprovare.",
      "failtofetchbuddyTaskName": "Errore durante il recupero del nome del progetto. Riprovare.",
      "failtofetchChoiceList": "Errore durante il recupero dell'elenco di opzioni dal servizio di stampa. Riprovare.",
      "invalidWidth": "Larghezza non valida.",
      "invalidHeight": "Altezza non valida."
    },
    "addCustomLayoutTitle": "Aggiungi layout personalizzato",
    "customLayoutOptionHint": "Suggerimento: aggiungere layout personalizzata dal servizio di stampa all’elenco delle opzioni di stampa.",
    "reportDefaultOptionLabel": "Layout predefinito",
    "pageSizeUnits": {
      "millimeters": "Millimetri",
      "points": "Punti"
    },
    "noDataTextRepresentation": "Nessun valore per i dati",
    "naTextRepresentation": "Valore non applicabile",
    "noDataDefaultText": "No Data",
    "notApplicableDefaultText": "No"
  },
  "generalTab": {
    "generalTabLabel": "Generale",
    "tabLabelsLegend": "Etichette pannello",
    "tabLabelsHint": "Suggerimento: specificare le etichette",
    "AOITabLabel": "Pannello area di interesse",
    "ReportTabLabel": "Pannello report",
    "bufferSettingsLegend": "Impostazioni buffer",
    "defaultBufferDistanceLabel": "Distanza predefinita del buffer",
    "defaultBufferUnitsLabel": "Unità buffer",
    "generalBufferSymbologyHint": "Suggerimento: simbologia da impiegare per definire l’area buffer intorno all'area di interesse definita",
    "aoiGraphicsSymbologyLegend": "Simbologia area di interesse",
    "aoiGraphicsSymbologyHint": "Suggerimento: simbologia impiegata per definire aree di interesse di punti, linee e poligoni",
    "pointSymbologyLabel": "Punto",
    "previewLabel": "Anteprima",
    "lineSymbologyLabel": "Linea",
    "polygonSymbologyLabel": "Poligono",
    "aoiBufferSymbologyLabel": "Simbologia buffer",
    "pointSymbolChooserPopupTitle": "Simbolo indirizzo o posizione punto",
    "polygonSymbolChooserPopupTitle": "Simbolo di poligono",
    "lineSymbolChooserPopupTitle": "Simbolo Linea",
    "aoiSymbolChooserPopupTitle": "Simbolo buffer",
    "aoiTabText": "AOI",
    "reportTabText": "Report",
    "invalidSymbolValue": "Valore del simbolo non valido."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Cerca impostazioni origine",
    "searchSourceSettingTitle": "Cerca impostazioni origine",
    "searchSourceSettingTitleHintText": "Aggiungere e configurare servizi di geocodifica o feature layer come fonti di ricerca. Queste fonti specificate determinano ciò che è possibile cercare nella casella di ricerca",
    "addSearchSourceLabel": "Aggiungi fonte di ricerca",
    "featureLayerLabel": "Feature layer",
    "geocoderLabel": "Geocodificatore",
    "generalSettingLabel": "Impostazioni generali",
    "allPlaceholderLabel": "Testo segnaposto per la ricerca in tutti:",
    "allPlaceholderHintText": "Suggerimento: immettere il testo da visualizzare come segnaposto durante la ricerca di tutti i layer e geocodificatore",
    "generalSettingCheckboxLabel": "Mostra popup per la feature o la posizione trovata",
    "countryCode": "Codici paesi o regioni",
    "countryCodeEg": "es. ",
    "countryCodeHint": "Se si lascia vuoto questo campo, la ricerca verrà effettuata in tutti i paesi e le regioni",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Esegui la ricerca nell'estensione mappa corrente",
    "locatorUrl": "URL geocodificatore",
    "locatorName": "Nome geocodificatore",
    "locatorExample": "Esempio",
    "locatorWarning": "Questa versione del servizio di geocodifica non è supportata. Il widget supporta il servizio di geocodifica 10.0 e versioni successive.",
    "locatorTips": "I suggerimenti non sono disponibili perché il servizio di geocodifica non supporta tale funzionalità.",
    "layerSource": "Origine del layer",
    "setLayerSource": "Imposta layer di origine",
    "setGeocoderURL": "Imposta URL geocodificatore",
    "searchLayerTips": "I suggerimenti non sono disponibili perché il feature service non supporta la funzionalità di paginazione.",
    "placeholder": "Testo segnaposto",
    "searchFields": "Campi di ricerca",
    "displayField": "Campo visualizzazione",
    "exactMatch": "Corrispondenza esatta",
    "maxSuggestions": "Suggerimenti massimi",
    "maxResults": "Risultati massimi",
    "enableLocalSearch": "Abilita ricerca locale",
    "minScale": "Scala Minima",
    "minScaleHint": "Quando la scala della mappa è più grande di questa scala, verrà applicata la ricerca locale",
    "radius": "Raggio",
    "radiusHint": "Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorità alla classificazione dei candidati di geocodifica in modo che i canditati più vicini alla posizione vengano restituiti per primi",
    "setSearchFields": "Imposta campi di ricerca",
    "set": "Imposta",
    "invalidUrlTip": "URL ${URL} non valido o non accessibile.",
    "invalidSearchSources": "Impostazioni fonte di ricerca non valide"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Compilare i campi obbligatori",
    "bufferDistanceFieldsErrorMsg": "Immettere dei valori validi",
    "invalidSearchToleranceErrorMsg": "Immettere un valore valido per la tolleranza di ricerca",
    "atLeastOneCheckboxCheckedErrorMsg": "Configurazione non valida: è necessario almeno uno strumento Area di interesse.",
    "noLayerAvailableErrorMsg": "Layer non disponibili",
    "layerNotSupportedErrorMsg": "Non supportato ",
    "noFieldSelected": "Impiegare l'azione Modifica per selezionare i campi per l'analisi.",
    "duplicateFieldsLabels": "Etichetta duplicata \"${labelText}\" aggiunta per: \"${itemNames}\"",
    "noLayerSelected": "Selezionare almeno un layer per l'analisi.",
    "errorInSelectingLayer": "Impossibile selezionare layer. Riprovare.",
    "errorInMaxFeatureCount": "Inserire il numero valido max di feature per l'analisi."
  }
});