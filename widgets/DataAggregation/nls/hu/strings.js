define({
  "_widgetLabel": "Adatösszevonás",
  "startPage": {
    "defaultStartPageInstructions": "Ez a widget segíti a fájlokból származó adatok feldolgozását és elküldését a térképen lévő kiválasztott rétegbe.<br/> <br/> A fájlban az értékeket vesszővel, tabulátorral, pontosvesszővel vagy függőleges vonallal kell tagolni.",
    "dragDrop": "Húzás és ejtés",
    "browse": "A fájl megkeresése tallózással",
    "or": "VAGY",
    "userPrivilege": "A fiókja nem teszi lehetővé az adatok létrehozását vagy módosítását.",
    "userCredits": "A(z) ${widgetName} krediteket igényel a(z) ${locator} locator használatához.",
    "contactAdmin": "További kreditek igényléséhez forduljon a szervezet adminisztrátorához.",
    "contactAdminEdit": "Szerkesztési jogosultságok igényléséhez forduljon a szervezet adminisztrátorához.",
    "canUseLocator": "A(z) ${locator} locator vektoros elemek lokalizálására lesz használva.",
    "notEnoughCredits": "Nincs elegendő kredit.",
    "locationAndField": "Hely- és mezőinformáció",
    "locationAndFieldHint": "Válassza ki a célréteg frissítésére használt értékeket a fájlból.",
    "cannotUseLocator": "A(z) ${widgetName} nem használható.",
    "noAnonymousEdit": "A(z) ${layerName} réteg nem támogatja a névtelen szerkesztést.",
    "pleaseLogin": "Jelentkezzen be a(z) ${org} szervezetbe, vagy vegye fel a kapcsolatot a szervezet adminisztrátorával, és kérje a névtelen szerkesztés engedélyezését.",
    "invalidEdit": "Érvénytelen jogosultságok",
    "unableToAccess": "A(z) ${layerName} nem érhető el.",
    "appropriateCredentials": "Ellenőrizze, hogy a megfelelő hitelesítő adatokkal jelentkezett-e be.",
    "shared": "Forduljon a szervezet adminisztrátorához, ha hozzáférést szeretne kérni a(z) ${layerName} réteghez.",
    "targetLayerLabel": "Célréteg",
    "homeButtonLabel": "Kezdőlap",
    "mappingErrorMsg": "Kattintson a mezők meghatározása melletti nyílra"
  },
  "mapping": {
    "schemaMapping": "Mezőinformáció",
    "schemaMappingHint": "Válassza ki a rétegben lévő mezőknek megfeleltethető mezőket a fájlból.",
    "locationMapping": "Helyinformáció",
    "locationMappingHint": "Válassza ki a fájlból várható cím- vagy koordináta-információk típusát."
  },
  "locationMapping": {
    "locationMappingPageHint": "Válasszon helytípust",
    "useAddress": "Lokalizálás cím alapján",
    "useAddressHint": "Az adatok címinformációt tartalmaznak.",
    "useCoordinates": "Lokalizálás koordináták alapján",
    "useCoordinatesHint": "Az adatok X/Y koordináta-értékeket tartalmaznak."
  },
  "address": {
    "addressPageHint": "Válasszon címtípust",
    "singleField": "Egy mező",
    "singleFieldHint": "Válassza ki a címinformációt tartalmazó mezőt.",
    "multiField": "Több mező",
    "multiFieldHint": "Válassza ki a címinformációt tartalmazó mezőket."
  },
  "coordinates": {
    "coordinatesPageHint": "Válassza ki a koordináta-adatot tartalmazó mezőket."
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Válassza ki a célmezőnek megfeleltethető forrásmezőt.",
    "sourceField": "Egyező forrásmező",
    "targetField": "Célmező"
  },
  "buttons": {
    "addToMap": "Hozzáadás a térképhez",
    "submit": "Beküldés",
    "download": "Letöltés"
  },
  "review": {
    "matched": "Sikerült megtalálni",
    "reviewMatched": "Megtalált helyek",
    "reviewMatchedHint": "Tekintse át a megtalált helyeket.",
    "unMatched": "nem található",
    "reviewUnMatched": "Nem található helyek",
    "reviewUnMatchedHint": "Tekintse át a nem található helyeket. A nem javított elemek nem lesznek beküldve.",
    "duplicate": "Duplikált",
    "reviewDuplicate": "Duplikált helyek",
    "reviewDuplicateHint": "Tekintse át a rétegben már megtalált helyeket. A nem javított elemek nem lesznek beküldve.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Használat:",
    "fromLayer": "Céladatok",
    "target": "Cél",
    "source": "Forrás",
    "fromFile": "Forrásadatok",
    "locationControlHint": "Címinformáció áttekintése",
    "duplicateAction": "Válasszon műveletet",
    "item": "Rekord:",
    "locateFeature": "Vektoros elem lokalizálása",
    "removeFeature": "Vektoros elem eltávolítása",
    "featureLocated": "Megtalált hely",
    "valuesDoNotMatch": "Nem egyezik a meglévő értékkel.",
    "sync": "Szinkronizálja a címinformációt a mezőinformációval.",
    "noFeaturesSaved": "Nem sikerült egyetlen vektoros elemet sem menteni.",
    "someFeaturesSaved": "${num} vektoros elem mentése sikerült.",
    "someFeaturesNotSaved": "${num} vektoros elem mentése nem sikerült.",
    "feature": "Vektoros elem információinak áttekintése",
    "locationInfo": "Hely információinak áttekintése",
    "selectValue": "Válasszon értéket",
    "reviewData": "Adatok áttekintése",
    "reviewDataHint": "Tekintse át az adatokat, mielőtt beküldené a rétegbe.",
    "reviewFeatureHint": "Tekintse át vagy szerkessze a vektoros elem és a hely információit.",
    "duplicateModify": "Másolat, módosítani kell",
    "duplicateSave": "Mentse új vektoros elemként"
  },
  "warningsAndErrors": {
    "invalidCSV": "Hiba történt az elemek CSV-ből történő beolvasásakor; ellenőrizze, hogy érvényes CSV-fájlt választott-e ki.",
    "noLayersWarning": "Nincs érvényes célréteg konfigurálva; ellenőrizze a konfigurációt.",
    "loadWarning": "Ehhez a widgethez vektoros adatszolgáltatás típusú adatforrás szükséges. A widget konfigurálásával határozzon meg egy adatforrást.",
    "saveError": "Hiba történt a vektoros elemek mentésekor.",
    "consumesCredits": "Ez az eszköz krediteket használ fel, amikor az ArcGIS Online Nemzetközi geokódoló szolgáltatással használják.",
    "noValue": "Mező kiválasztása",
    "mappingTitle": "",
    "locationMappingComplete": "A helyleképezés befejeződött",
    "fieldMappingComplete": "A mezőleképezés befejeződött",
    "settingsCleared": "A rendszer törli a beállításokat.",
    "proceed": "Folytatja?",
    "itemMoveMatch": "Az alkalmazás lokalizálta és a megtalált helyek listájába mozgatta az elemet.",
    "itemMoveUnMatched": "Az elem nem lokalizálható. A nem található helyek listájába került.",
    "itemWillBeLocated": "A rendszer eltávolítja az elemet a többször előforduló helyek listájáról.",
    "cannotLocate": "Nem sikerült lokalizálni az elemet. Ellenőrizze a helyinformációt.",
    "invalidMessage": "Érvénytelen érték.",
    "rangeMessage": "Az értéknek ${num} karakternél kevesebbnek kell lennie.",
    "locatorError": "A locator érvénytelen vagy nem érhető el.",
    "notConfigured": "a locator nincs konfigurálva az aktuális lokalizálási beállításokhoz",
    "noMoreLocators": "nincs konfigurálva további locator"
  },
  "featureToolbar": {
    "locate": "Megkeresés",
    "save": "Rekord mentése",
    "cancel": "Módosítások visszavonása",
    "cancelTitle": "Módosítások visszavonása",
    "cancelMessage": "Visszavonja az aktuális rekord módosításait?"
  }
});