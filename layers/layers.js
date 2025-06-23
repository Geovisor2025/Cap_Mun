var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MunicipiosPotencialesProductivos_1 = new ol.format.GeoJSON();
var features_MunicipiosPotencialesProductivos_1 = format_MunicipiosPotencialesProductivos_1.readFeatures(json_MunicipiosPotencialesProductivos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosPotencialesProductivos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosPotencialesProductivos_1.addFeatures(features_MunicipiosPotencialesProductivos_1);
var lyr_MunicipiosPotencialesProductivos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosPotencialesProductivos_1, 
                style: style_MunicipiosPotencialesProductivos_1,
                popuplayertitle: 'Municipios Potenciales Productivos',
                interactive: true,
    title: 'Municipios Potenciales Productivos<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_0.png" /> ALTIPLANO<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_1.png" /> AMAZONIA<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_2.png" /> CHACO<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_3.png" /> CHAPARE<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_4.png" /> LLANOS<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_5.png" /> VALLE<br />\
    <img src="styles/legend/MunicipiosPotencialesProductivos_1_6.png" /> YUNGAS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MunicipiosPotencialesProductivos_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MunicipiosPotencialesProductivos_1];
lyr_MunicipiosPotencialesProductivos_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', 'REGION': 'REGION', });
lyr_MunicipiosPotencialesProductivos_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MunicipiosPotencialesProductivos_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MunicipiosPotencialesProductivos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});