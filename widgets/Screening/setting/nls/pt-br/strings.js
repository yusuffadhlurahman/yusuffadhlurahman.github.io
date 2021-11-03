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
    "areaSquareFeetUnit": "Pés Quadrados",
    "areaAcresUnit": "Acres",
    "areaSquareMetersUnit": "Metros Quadrados",
    "areaSquareKilometersUnit": "Quilômetros Quadrados",
    "areaHectaresUnit": "Hectares",
    "areaSquareMilesUnit": "Milhas Quadradas",
    "lengthFeetUnit": "Pés",
    "lengthMilesUnit": "Milhas",
    "lengthMetersUnit": "Metros",
    "lengthKilometersUnit": "Quilômetros"
  },
  "analysisTab": {
    "analysisTabLabel": "Análise",
    "selectAnalysisLayerLabel": "Camadas de Análise",
    "addLayerLabel": "Adicionar Camadas",
    "noValidLayersForAnalysis": "Nenhuma camada válida localizada no mapa da web selecionado.",
    "noValidFieldsForAnalysis": "Nenhuma campo válido localizado no mapa da web selecionado. Remova a camada selecionada.",
    "allowGroupingLabel": "Agrupe feições por campo com o mesmo valor",
    "groupingHintDescription": "Dica: Por padrão, todas as feições com o mesmo valor para os campos selecionados serão agrupadas para aparecer como uma única entrada no relatório. Desative o agrupamento por atributos semelhantes para exibir uma entrada para cada feição.",
    "addLayersHintText": "Dica: Escolha as camadas e os campos a serem incluídos na análise e no relatório",
    "queryCapabilityHintText": "Somente camadas com recursos de consulta serão listadas",
    "addLayerNameTitle": "Nome da Camada",
    "addFieldsLabel": "Adicionar Campo",
    "addFieldsPopupTitle": "Selecionar Campos",
    "addFieldsNameTitle": "Nomes de Campo",
    "aoiToolsLegendLabel": "Ferramentas da Área de Interesse",
    "aoiToolsDescriptionLabel": "Escolha e rotule as ferramentas disponíveis para criar a área de interesse.",
    "placenameLabel": "Nome do Local",
    "drawToolsLabel": "Escolher ferramentas de desenho",
    "uploadShapeFileLabel": "Transferir um shapefile",
    "coordinatesLabel": "Coordenadas",
    "coordinatesDrpDwnHintText": "Dica: Escolha a unidade para exibir as transversais inseridas",
    "coordinatesBearingDrpDwnHintText": "Dica: Escolha a direção para exibir as transversais inseridas",
    "allowShapefilesUploadLabel": "Permitir que os usuários transfiram shapefiles para incluir na análise",
    "allowShapefilesUploadLabelHintText": "Dica: Adicione uma opção na guia Relatório, na qual os usuários possam carregar seus próprios dados como shapefile para inclusão no relatório de análise.",
    "allowVisibleLayerAnalysisLabel": "Não analisar ou relatar resultados para camadas que não são visíveis",
    "allowVisibleLayerAnalysisHintText": "Sugestão: As camadas que foram desativadas ou não são visíveis devido ao ajuste das configurações de visibilidade não serão analisadas ou incluídas em resultados impressos ou baixados.",
    "areaUnitsLabel": "Unidades para resultados da análise(Área)",
    "lengthUnitsLabel": "Unidades para resultados da análise(Comprimento)",
    "maxFeatureForAnalysisLabel": "Número máximo de feições para analisar",
    "maxFeatureForAnalysisHintText": "Dica: Defina o número máximo de feições que serão incluídas na análise",
    "searchToleranceLabelText": "Tolerância de Pesquisa",
    "searchToleranceHint": "Dica: A tolerância de pesquisa é utilizada ao analisar entradas de ponto e linha",
    "placenameButtonText": "Nome do local",
    "drawToolsButtonText": "Desenhar",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordenadas",
    "invalidLayerErrorMsg": "Configure os campos para",
    "drawToolSelectableLayersLabel": "Escolher camadas selecionáveis",
    "drawToolSelectableLayersHint": "Dica: Escolha as camadas que contêm as feições que podem ser selecionadas utilizando a ferramenta Selecionar Desenho",
    "drawToolsSettingsFieldsetLabel": "Ferramenta de Desenho",
    "drawToolPointLabel": "Ponto",
    "drawToolPolylineLabel": "Polilinha",
    "drawToolExtentLabel": "Extensão",
    "drawToolPolygonLabel": "Polígono",
    "drawToolCircleLabel": "Círculo",
    "selectDrawToolsText": "Escolha as ferramentas de desenho disponíveis para criar a área de interesse",
    "selectingDrawToolErrorMessage": "Escolha pelo menos uma ferramenta de desenho ou camada de seleção para utilizar a opção Ferramentas de Desenho para Ferramentas de AOI."
  },
  "downloadTab": {
    "downloadLegend": "Configurações de Download",
    "reportLegend": "Configurações do Relatório",
    "downloadTabLabel": "Download",
    "syncEnableOptionLabel": "Camadas de feição",
    "syncEnableOptionHint": "Dica: Escolha as camadas que podem ser baixadas e especifique os formatos nos quais cada camada está disponível. Conjuntos de dados baixados incluirão as feições que interseccionam a área de interesse.",
    "syncEnableOptionNote": "Nota: Os downloads de arquivos geodatabase e shapefile exigem camadas de feição habilitadas para sincronização. O formato de shapefile é somente suportado com camadas de feição hospedadas do ArcGIS Online.",
    "extractDataTaskOptionLabel": "Serviço de geoprocessamento Extrair Tarefa de Dados",
    "extractDataTaskOptionHint": "Dica: Utilize um serviço de geoprocessamento Tarefa Extrair Dados publicado para baixar feições que interseccionam a área de interesse nos formatos de Arquivo Geodatabase ou Shapefile.",
    "cannotDownloadOptionLabel": "Desabilitar o download",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nome da Camada",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Arquivo Geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Permitir Download"
    },
    "setButtonLabel": "Configurar",
    "GPTaskLabel": "Especifique a url para o serviço de geoprocessamento",
    "printGPServiceLabel": "Imprimir URL do serviço",
    "setGPTaskTitle": "Especifique a URL de Serviço de Geoprocessamento exigida",
    "logoLabel": "Logotipo",
    "logoChooserHint": "Dica: Clique no ícone da imagem para alterar o logotipo mostrado no canto superior esquerdo do relatório",
    "footnoteLabel": "Nota de rodapé",
    "columnTitleColorPickerLabel": "Cor do título da coluna do relatório",
    "reportTitleLabel": "Título do relatório",
    "displaySummaryLabel": "Exibir Resumo",
    "hideZeroValueRowLabel": "Ocultar linhas com valor 0 para todos os campos de análise",
    "hideNullValueRowLabel": "Ocultar linhas com valor de NoData (nulo ou vazio) para todos os campos de análise",
    "errorMessages": {
      "invalidGPTaskURL": "Serviço de geoprocessamento inválido. Selecione o serviço de geoprocessamento contendo Tarefa Extrair Dados.",
      "noExtractDataTaskURL": "Selecione o serviço de geoprocessamento contendo Tarefa Extrair Dados.",
      "duplicateCustomOption": "A entrada duplicada para ${duplicateValueSizeName} existe.",
      "invalidLayoutWidth": "Largura inválida inserida para ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Altura inválida inserida para ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unidade de página inválida selecionada para ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Erro ao procura informações da dimensão de tarefa do amigo. Tente novamente.",
      "failtofetchbuddyTaskName": "Erro ao procura nome de tarefa do amigo. Tente novamente.",
      "failtofetchChoiceList": "Erro ao buscar a lista de opções do serviço de impressão. Tente novamente.",
      "invalidWidth": "Largura inválida.",
      "invalidHeight": "Altura inválida."
    },
    "addCustomLayoutTitle": "Adicionar layout personalizado",
    "customLayoutOptionHint": "Dica: Adicione o layout do seu serviço de impressão à lista das opções de impressão.",
    "reportDefaultOptionLabel": "Layout Padrão",
    "pageSizeUnits": {
      "millimeters": "Milímetros",
      "points": "Pontos"
    },
    "noDataTextRepresentation": "Nenhum valor de dados",
    "naTextRepresentation": "Valor não aplicável",
    "noDataDefaultText": "Sem Dados",
    "notApplicableDefaultText": "Não Aplicável"
  },
  "generalTab": {
    "generalTabLabel": "Geral",
    "tabLabelsLegend": "Rótulos do Painel",
    "tabLabelsHint": "Sugestão: Especificar Rótulos",
    "AOITabLabel": "Painel da área de Interesse",
    "ReportTabLabel": "Painel de relatório",
    "bufferSettingsLegend": "Configurações do Buffer",
    "defaultBufferDistanceLabel": "Distância de buffer padrão",
    "defaultBufferUnitsLabel": "Unidades do buffer",
    "generalBufferSymbologyHint": "Dica: Simbologia a ser utilizada para indicar a área do buffer em torno das áreas de interesse definidas",
    "aoiGraphicsSymbologyLegend": "Simbologia da Área de Interesse",
    "aoiGraphicsSymbologyHint": "Dica: Simbologia utilizada para indicar pontos, linhas e polígonos de interesse",
    "pointSymbologyLabel": "Ponto",
    "previewLabel": "Visualizar",
    "lineSymbologyLabel": "Linha",
    "polygonSymbologyLabel": "Polígono",
    "aoiBufferSymbologyLabel": "Simbologia do buffer",
    "pointSymbolChooserPopupTitle": "Símbolo do local de ponto ou endereço",
    "polygonSymbolChooserPopupTitle": "Símbolo de polígono",
    "lineSymbolChooserPopupTitle": "Símbolo de Linha",
    "aoiSymbolChooserPopupTitle": "Símbolo de buffer",
    "aoiTabText": "AOI",
    "reportTabText": "Relatório",
    "invalidSymbolValue": "Valor de símbolo inválido."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Configurações da Fonte de Pesquisa",
    "searchSourceSettingTitle": "Configurações da Fonte de Pesquisa",
    "searchSourceSettingTitleHintText": "Adicione e configure serviços de geocódigo ou camadas de feição como fontes de pesquisa. Estas fontes especificadas determinam o que é pesquisável dentro da caixa de pesquisa.",
    "addSearchSourceLabel": "Adicionar Fonte de Pesquisa",
    "featureLayerLabel": "Camada de Feição",
    "geocoderLabel": "Geocodificador",
    "generalSettingLabel": "Configurações Gerais",
    "allPlaceholderLabel": "Texto de local reservado para pesquisar todos:",
    "allPlaceholderHintText": "Sugestão: Insira o texto a ser mostrado como reservado ao pesquisar todas as camadas e geocodificador",
    "generalSettingCheckboxLabel": "Mostrar pop-up do local ou feição localizada",
    "countryCode": "Códigos de Região e País",
    "countryCodeEg": "por exemplo ",
    "countryCodeHint": "Deixar este valor em branco pesquisará todos os países e regiões",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Somente pesquisar na extensão de mapa atual",
    "locatorUrl": "URL do Geocodificador",
    "locatorName": "Nome do Geocodificador",
    "locatorExample": "Exemplo",
    "locatorWarning": "Esta versão do serviço de geocodificação não é suportado. O widget suporta serviço de geocodificação 10.0 e superior.",
    "locatorTips": "As sugestões não estão disponíveis, pois o serviço de geocodificação não suporta o recursos de sugestão.",
    "layerSource": "Origem da Camada",
    "setLayerSource": "Configurar Origem da Camada",
    "setGeocoderURL": "Configurar URL do Geocodificador",
    "searchLayerTips": "As sugestões não estão disponíveis, pois o serviço da feição não suporta o recursos de paginação.",
    "placeholder": "Texto do Placeholder",
    "searchFields": "Pesquisar Campos",
    "displayField": "Campo de Visualização",
    "exactMatch": "Combinação Exata",
    "maxSuggestions": "Máximo de Sugestões",
    "maxResults": "Máximo de Resultados",
    "enableLocalSearch": "Habilitar pesquisa de local",
    "minScale": "Escala Mín",
    "minScaleHint": "Quando a escala do mapa for maior que esta escala, a pesquisa de local será aplicada",
    "radius": "Raio",
    "radiusHint": "Especifica o raio de uma área ao redor do centro do mapa atual que é utilizado para impulsionar o grau de candidatos de geocodificação de forma que os candidatos mais próximos ao local sejam retornados primeiro",
    "setSearchFields": "Configurar Campos de Pesquisa",
    "set": "Configurar",
    "invalidUrlTip": "A URL ${URL} é inválida ou inacessível.",
    "invalidSearchSources": "Configurações de fonte de pesquisa inválida"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Complete todos os campos exigidos.",
    "bufferDistanceFieldsErrorMsg": "Insira valores válidos",
    "invalidSearchToleranceErrorMsg": "Insira um valor válido para tolerância de pesquisa",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuração inválida: Pelo menos uma ferramenta da Área de Interesse é exigida.",
    "noLayerAvailableErrorMsg": "Nenhuma camada disponível",
    "layerNotSupportedErrorMsg": "Não Suportado ",
    "noFieldSelected": "Utilize a ação de edição para selecionar campos para análise.",
    "duplicateFieldsLabels": "Duplicar rótulo \"${labelText}\" adicionado para : \"${itemNames}\"",
    "noLayerSelected": "Selecione pelo menos uma camada para análise.",
    "errorInSelectingLayer": "Não foi possível selecionar a camada. Tente novamente.",
    "errorInMaxFeatureCount": "Insira a contagem máxima de feições válida para análise."
  }
});