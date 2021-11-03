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
    "areaSquareFeetUnit": "Négyzetláb",
    "areaAcresUnit": "Acre",
    "areaSquareMetersUnit": "Négyzetméter",
    "areaSquareKilometersUnit": "Négyzetkilométer",
    "areaHectaresUnit": "Hektár",
    "areaSquareMilesUnit": "Négyzetmérföld",
    "lengthFeetUnit": "Láb",
    "lengthMilesUnit": "Mérföld",
    "lengthMetersUnit": "Méter",
    "lengthKilometersUnit": "Kilométer"
  },
  "analysisTab": {
    "analysisTabLabel": "Elemzés",
    "selectAnalysisLayerLabel": "Eredményrétegek",
    "addLayerLabel": "Rétegek hozzáadása",
    "noValidLayersForAnalysis": "Nincsenek érvényes rétegek a kiválasztott webtérképen.",
    "noValidFieldsForAnalysis": "Nincsenek érvényes mezők a kiválasztott webtérképen. Távolítsa el a kiválasztott réteget.",
    "allowGroupingLabel": "Vektoros elemek csoportosítása azonos értékkel rendelkező mező szerint.",
    "groupingHintDescription": "Tipp: Alapértelmezés szerint a kijelölt mezőkben azonos értéket tartalmazó összes vektoros elem csoportosítva, egyetlen bejegyzésként jelenik meg a jelentésben. Tiltsa le a hasonló attribútumok szerinti csoportosítást, ha minden egyes vektoros elemhez külön bejegyzést szeretne megjeleníteni.",
    "addLayersHintText": "Tipp: Válassza ki az elemzésben és a jelentésben szerepeltetni kívánt mezőket.",
    "queryCapabilityHintText": "Csak a lekérdezési képességekkel rendelkező rétegek lesznek felsorolva",
    "addLayerNameTitle": "Réteg neve",
    "addFieldsLabel": "Mező hozzáadása",
    "addFieldsPopupTitle": "Mezők kiválasztása",
    "addFieldsNameTitle": "Mezőnevek",
    "aoiToolsLegendLabel": "Vizsgálatiterület-eszközök",
    "aoiToolsDescriptionLabel": "Válassza ki és lássa el címkével a vizsgálati terület létrehozásához rendelkezésre álló eszközöket.",
    "placenameLabel": "Hely neve",
    "drawToolsLabel": "Rajzolóeszközök kiválasztása",
    "uploadShapeFileLabel": "Shapefile feltöltése",
    "coordinatesLabel": "Koordináták",
    "coordinatesDrpDwnHintText": "Tipp: Válassza ki a megadott sokszögelések megjelenítési mértékegységét",
    "coordinatesBearingDrpDwnHintText": "Tipp: Válassza ki a megadott sokszögelések megjelenítési irányszögét",
    "allowShapefilesUploadLabel": "Az elemzésbe belefoglalni kívánt shapefile-ok feltöltésének engedéylezése a felhasználók számára",
    "allowShapefilesUploadLabelHintText": "Tipp: Adjon olyan lehetőséget a Jelentés laphoz, ahol a felhasználók shapefile-ként tölthetik fel saját adataikat az elemzési jelentésbe való belefoglalásuk céljából",
    "allowVisibleLayerAnalysisLabel": "A nem látható rétegeket ne elemezze és ne jelenítse meg az eredményeiket",
    "allowVisibleLayerAnalysisHintText": "Tipp: A kikapcsolt vagy a méretarányhoz kapcsolódó láthatósági beállítások miatt nem látható rétegekről nem készül elemzés, illetve nem fognak szerepelni a nyomtatott vagy letöltött eredményekben.",
    "areaUnitsLabel": "Elemzés eredményének mértékegységei (terület)",
    "lengthUnitsLabel": "Elemzés eredményének mértékegységei (hossz)",
    "maxFeatureForAnalysisLabel": "Elemezni kívánt vektoros elemek maximális száma",
    "maxFeatureForAnalysisHintText": "Tipp: Állítsa be az elemzésbe belefoglalni kívánt vektoros elemek maximális számát",
    "searchToleranceLabelText": "Keresési tolerancia",
    "searchToleranceHint": "Tipp: A keresési tolerancia pont- és vonalbemenetek elemzésénél használható",
    "placenameButtonText": "Hely neve",
    "drawToolsButtonText": "Rajzolás",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordináták",
    "invalidLayerErrorMsg": "Konfigurálja a mezőket a következőhöz:",
    "drawToolSelectableLayersLabel": "Válasszon kijelölési rétegeket",
    "drawToolSelectableLayersHint": "Tipp: Válassza ki az azokat a vektoros elemeket tartalmazó rétegeket, amely kiválaszthatók a Rajz kiválasztása eszközzel",
    "drawToolsSettingsFieldsetLabel": "Rajzolóeszközök",
    "drawToolPointLabel": "Pont",
    "drawToolPolylineLabel": "Polyline",
    "drawToolExtentLabel": "Kiterjedés",
    "drawToolPolygonLabel": "Polygon",
    "drawToolCircleLabel": "Kör",
    "selectDrawToolsText": "Válassza ki a vizsgálati terület létrehozásához rendelkezésre álló rajzolóeszközöket.",
    "selectingDrawToolErrorMessage": "Válasszon ki legalább egy olyan rajzolóeszközt vagy kiválasztási réteget, amelyet az AOI eszközök Rajzeszközök lehetőségénél kíván felhasználni."
  },
  "downloadTab": {
    "downloadLegend": "Letöltési beállítások",
    "reportLegend": "Jelentésbeállítások",
    "downloadTabLabel": "Letöltés",
    "syncEnableOptionLabel": "Vektoros rétegek",
    "syncEnableOptionHint": "Tipp: Válassza ki a letölthető rétegeket, és adja meg azokat a formátumokat, amelyekben az egyes rétegek rendelkezésre állnak. A letöltött adathalmazok magukban foglalják azokat a vektoros elemeket, amelyek metszik a vizsgálati területet.",
    "syncEnableOptionNote": "Megjegyzés: A fájl-geoadatbázisok és shapefile-ok letöltéséhez olyan vektoros rétegek szükségesek, amelyeknél engedélyezve van a szinkronizálás. A shapefile-formátumot csak az ArcGIS Online-alapú vektoros rétegek támogatják.",
    "extractDataTaskOptionLabel": "Adatkinyerési feladat téradatfeldolgozási szolgáltatás",
    "extractDataTaskOptionHint": "Tipp: Használja a közzétett Adatkinyerési téradat-feldolgozás szolgáltatást olyan vektoros elemek letöltéséhez, amelyek átfedésben vannak a vizsgálati területtel a fájl-geoadatbázisban vagy a shapefile-formátumokban.",
    "cannotDownloadOptionLabel": "Letöltés tiltása",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Réteg neve",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Fájl-geoadatbázis",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Letöltés engedélyezése"
    },
    "setButtonLabel": "Beállítás",
    "GPTaskLabel": "Adja meg a téradatfeldolgozási szolgáltatás URL-jét",
    "printGPServiceLabel": "Nyomtatási szolgáltatás URL-címe",
    "setGPTaskTitle": "Adja meg a kötelező téradatfeldolgozó szolgáltatás URL-jét",
    "logoLabel": "Logó",
    "logoChooserHint": "Tipp: Kattintson a kép ikonra a jelentés bal felső sarkában látható embléma cseréjéhez",
    "footnoteLabel": "Lábjegyzet",
    "columnTitleColorPickerLabel": "Jelentés oszlopcímének színe",
    "reportTitleLabel": "Jelentés címe",
    "displaySummaryLabel": "Összesítés megjelenítése",
    "hideZeroValueRowLabel": "0 értékű sorok elrejtése valamennyi elemzésmező esetén",
    "hideNullValueRowLabel": "Adatérték nélküli (0 értékű vagy üres) sorok elrejtése valamennyi elemzésmező esetén",
    "errorMessages": {
      "invalidGPTaskURL": "Érvénytelen téradat-feldolgozási szolgáltatás. Válasszon ki olyan téradat-feldolgozási szolgáltatást, amely tartalmaz Adatkinyerési feladatot.",
      "noExtractDataTaskURL": "Válasszon ki olyan téradat-feldolgozási szolgáltatást, amely tartalmaz Adatkinyerési feladatot.",
      "duplicateCustomOption": "Ismétlődő bejegyzés található a(z) ${duplicateValueSizeName} esetében.",
      "invalidLayoutWidth": "A(z) ${customLayoutOptionValue} értékhez megadott szélesség érvénytelen.",
      "invalidLayoutHeight": "A(z) ${customLayoutOptionValue} értékhez megadott magasság érvénytelen.",
      "invalidLayoutPageUnits": "A(z) ${customLayoutOptionValue} értékhez megadott térképlap-mértékegység érvénytelen.",
      "failtofetchbuddyTaskDimension": "Hiba történt a társfeladat méretinformációinak lekérése közben. Próbálja meg újra.",
      "failtofetchbuddyTaskName": "Hiba történt a társfeladat nevének lekérése közben. Próbálja meg újra.",
      "failtofetchChoiceList": "Hiba történt a választéklistának a nyomtatási szolgáltatásból való lekérése közben. Próbálja meg újra.",
      "invalidWidth": "Érvénytelen szélesség.",
      "invalidHeight": "Érvénytelen magasság."
    },
    "addCustomLayoutTitle": "Egyéni elrendezés hozzáadása",
    "customLayoutOptionHint": "Tipp: Adjon hozzá elrendezést a nyomtatási szolgáltatásból a nyomtatási beállításokhoz.",
    "reportDefaultOptionLabel": "Alapértelmezett elrendezés",
    "pageSizeUnits": {
      "millimeters": "Milliméter",
      "points": "Pontok"
    },
    "noDataTextRepresentation": "Nincs adatérték",
    "naTextRepresentation": "Nem alkalmazható érték",
    "noDataDefaultText": "Nincs adat",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "Általános",
    "tabLabelsLegend": "Panelfeliratok",
    "tabLabelsHint": "Tipp: Adja meg a feliratokat",
    "AOITabLabel": "Vizsgálati terület panel",
    "ReportTabLabel": "Jelentés panel",
    "bufferSettingsLegend": "Bufferbeállítások",
    "defaultBufferDistanceLabel": "Alapértelmezett buffertávolság",
    "defaultBufferUnitsLabel": "Bufferegységek",
    "generalBufferSymbologyHint": "Tipp: Használjon szimbólumrendszert a meghatározott vizsgálati terület körüli bufferterület jelzéséhez",
    "aoiGraphicsSymbologyLegend": "Vizsgálati terület szimbólumrendszere",
    "aoiGraphicsSymbologyHint": "Tipp: A pont, vonal és polygon típusú vizsgálati területek jelöléséhez használni kívánt szimbólumrendszer",
    "pointSymbologyLabel": "Pont",
    "previewLabel": "Előnézet",
    "lineSymbologyLabel": "Vonal",
    "polygonSymbologyLabel": "Polygon",
    "aoiBufferSymbologyLabel": "Buffer-szimbólumrendszer",
    "pointSymbolChooserPopupTitle": "Cím vagy pontszerű hely szimbóluma",
    "polygonSymbolChooserPopupTitle": "Polygon szimbóluma",
    "lineSymbolChooserPopupTitle": "Vonal szimbóluma",
    "aoiSymbolChooserPopupTitle": "Buffer szimbóluma",
    "aoiTabText": "Vizsgálati terület",
    "reportTabText": "Jelentés",
    "invalidSymbolValue": "Érvénytelen szimbólumérték."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Keresési forrás beállításai",
    "searchSourceSettingTitle": "Keresési forrás beállításai",
    "searchSourceSettingTitleHintText": "Geokódoló szolgáltatások vagy vektoros rétegek hozzáadása és konfigurálása keresési forrásként. Ezek a megadott források határozzák meg, mi kereshető a keresőmezőben",
    "addSearchSourceLabel": "Keresési forrás hozzáadása",
    "featureLayerLabel": "Vektoros réteg",
    "geocoderLabel": "Geokódoló",
    "generalSettingLabel": "Általános beállítás",
    "allPlaceholderLabel": "Helyőrző szöveg az összes kereséséhez:",
    "allPlaceholderHintText": "Tipp: Adja meg az összes réteg és geokódoló keresésekor helyőrzőként megjelenítendő szöveget",
    "generalSettingCheckboxLabel": "Felugró ablak megjelenítése a megtalált vektoros elemhez vagy helyhez",
    "countryCode": "Ország- vagy régiókód(ok)",
    "countryCodeEg": "pl. ",
    "countryCodeHint": "Ha üresen hagyja ezt az értéket, a keresés minden országra és régióra ki fog terjedni",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Csak az aktuális térképkiterjedésen belül keressen",
    "locatorUrl": "Geokódoló URL-címe",
    "locatorName": "Geokódoló neve",
    "locatorExample": "Példa",
    "locatorWarning": "A geokódoló szolgáltatás ezen verziója nem támogatott. A widget csak a 10.0 és újabb verziójú geokódoló szolgáltatást támogatja.",
    "locatorTips": "Nem állnak rendelkezésre a javaslatok, mert a geokódoló szolgáltatás nem támogatja ezt a funkciót.",
    "layerSource": "Rétegforrás",
    "setLayerSource": "Rétegforrás beállítása",
    "setGeocoderURL": "Geokódoló URL-címének beállítása",
    "searchLayerTips": "Nem állnak rendelkezésre a javaslatok, mert a vektoros adatszolgáltatás nem támogatja az oldalszámozást.",
    "placeholder": "Helyőrző szöveg",
    "searchFields": "Mezők keresése",
    "displayField": "Megjelenítési mező",
    "exactMatch": "Pontos találat",
    "maxSuggestions": "Javaslatok maximális száma",
    "maxResults": "Találatok maximális száma",
    "enableLocalSearch": "Helyi keresés engedélyezése",
    "minScale": "Min. méretarány",
    "minScaleHint": "Ha a térkép méretaránya nagyobb, mint ez a méretarány, akkor a helyi keresés lesz aktív",
    "radius": "Sugár",
    "radiusHint": "A térkép aktuális középpontja körül annak a területnek a sugarát határozza meg, amelyen belül megnő a geokódoló jelöltjeinek prioritása, hogy az adott helyhez legközelebb lévő jelöltek elsőbbséget élvezzenek",
    "setSearchFields": "Keresőmezők beállítása",
    "set": "Beállítás",
    "invalidUrlTip": "A(z) ${URL} URL-cím érvénytelen vagy nem érhető el.",
    "invalidSearchSources": "A keresési forrás beállításai érvénytelenek"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Töltse ki a kötelező mezőket",
    "bufferDistanceFieldsErrorMsg": "Adjon meg érvényes értékeket",
    "invalidSearchToleranceErrorMsg": "Adjon meg érvényes értéket a keresési toleranciához",
    "atLeastOneCheckboxCheckedErrorMsg": "Érvénytelen konfiguráció: Legalább egy vizsgálati terület eszköz szükséges.",
    "noLayerAvailableErrorMsg": "Nincsenek elérhető rétegek",
    "layerNotSupportedErrorMsg": "Nem támogatott ",
    "noFieldSelected": "Használja a szerkesztési műveletet az elemzéshez szükséges mezők kiválasztásához.",
    "duplicateFieldsLabels": "A(z) „${labelText}” címke többször van hozzáadva a következőhöz: „${itemNames}”",
    "noLayerSelected": "Válasszon legalább egy réteget az elemzéshez.",
    "errorInSelectingLayer": "Nem sikerült a réteg kijelölése. Próbálja meg újra.",
    "errorInMaxFeatureCount": "Kérjük, érvényes maximális vektoros elemszámot adjon meg az elemzéshez."
  }
});