var wms_layers = [];


        var lyr_SatelitegoogleMap_0 = new ol.layer.Tile({
            'title': 'Satelite googleMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> ASEMROWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> BENOWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BUBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> CERME<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> DRIYOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> DUKUHPAKIS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> GAYUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> GENTENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> GUBENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> GUNUNGANYAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> JAMBANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> KARANGPILANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> KEBOMAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> KENJERAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> KREMBANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> LAKARSANTRI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> MENGANTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> MULYOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> PABEANCANTIKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> RUNGKUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> SAWAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> SEMAMPIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> SIMOKERTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> SUKOLILO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> SUKOMANUNGGAL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> TAMAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> TAMBAKSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> TANDES<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> TEGALSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> TENGGILISMEJOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> WARU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> WIYUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> WONOCOLO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> WONOKROMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> <br />' });
var format_AR_CurahHujan_2 = new ol.format.GeoJSON();
var features_AR_CurahHujan_2 = format_AR_CurahHujan_2.readFeatures(json_AR_CurahHujan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_CurahHujan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_CurahHujan_2.addFeatures(features_AR_CurahHujan_2);
var lyr_AR_CurahHujan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_CurahHujan_2, 
                style: style_AR_CurahHujan_2,
                popuplayertitle: 'AR_CurahHujan',
                interactive: true,
    title: 'AR_CurahHujan<br />\
    <img src="styles/legend/AR_CurahHujan_2_0.png" /> Rendah<br />' });
var format_AR_Sungai_3 = new ol.format.GeoJSON();
var features_AR_Sungai_3 = format_AR_Sungai_3.readFeatures(json_AR_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_Sungai_3.addFeatures(features_AR_Sungai_3);
var lyr_AR_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_Sungai_3, 
                style: style_AR_Sungai_3,
                popuplayertitle: 'AR_Sungai',
                interactive: true,
    title: 'AR_Sungai<br />\
    <img src="styles/legend/AR_Sungai_3_0.png" /> Aman<br />\
    <img src="styles/legend/AR_Sungai_3_1.png" /> Agak Rawan<br />\
    <img src="styles/legend/AR_Sungai_3_2.png" /> Cukup Rawan<br />\
    <img src="styles/legend/AR_Sungai_3_3.png" /> Rawan<br />\
    <img src="styles/legend/AR_Sungai_3_4.png" /> Sangat Rawan<br />' });
var format_AR_Landuse_4 = new ol.format.GeoJSON();
var features_AR_Landuse_4 = format_AR_Landuse_4.readFeatures(json_AR_Landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_Landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_Landuse_4.addFeatures(features_AR_Landuse_4);
var lyr_AR_Landuse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_Landuse_4, 
                style: style_AR_Landuse_4,
                popuplayertitle: 'AR_Landuse',
                interactive: true,
    title: 'AR_Landuse<br />\
    <img src="styles/legend/AR_Landuse_4_0.png" /> Lahan Kosong<br />\
    <img src="styles/legend/AR_Landuse_4_1.png" /> Permukiman<br />\
    <img src="styles/legend/AR_Landuse_4_2.png" /> Sawah/Rawa<br />\
    <img src="styles/legend/AR_Landuse_4_3.png" /> Vegetasi<br />' });
var format_AR_JenisTanah_5 = new ol.format.GeoJSON();
var features_AR_JenisTanah_5 = format_AR_JenisTanah_5.readFeatures(json_AR_JenisTanah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_JenisTanah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_JenisTanah_5.addFeatures(features_AR_JenisTanah_5);
var lyr_AR_JenisTanah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_JenisTanah_5, 
                style: style_AR_JenisTanah_5,
                popuplayertitle: 'AR_JenisTanah',
                interactive: true,
    title: 'AR_JenisTanah<br />\
    <img src="styles/legend/AR_JenisTanah_5_0.png" /> Aluvial<br />\
    <img src="styles/legend/AR_JenisTanah_5_1.png" /> Grumosol<br />\
    <img src="styles/legend/AR_JenisTanah_5_2.png" /> Hidromorf<br />\
    <img src="styles/legend/AR_JenisTanah_5_3.png" /> Kelabu<br />' });
var format_AR_KemiringanLereng_6 = new ol.format.GeoJSON();
var features_AR_KemiringanLereng_6 = format_AR_KemiringanLereng_6.readFeatures(json_AR_KemiringanLereng_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_KemiringanLereng_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_KemiringanLereng_6.addFeatures(features_AR_KemiringanLereng_6);
var lyr_AR_KemiringanLereng_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_KemiringanLereng_6, 
                style: style_AR_KemiringanLereng_6,
                popuplayertitle: 'AR_KemiringanLereng',
                interactive: true,
    title: 'AR_KemiringanLereng<br />\
    <img src="styles/legend/AR_KemiringanLereng_6_0.png" /> 0 - 8%<br />\
    <img src="styles/legend/AR_KemiringanLereng_6_1.png" /> 8 - 15%<br />\
    <img src="styles/legend/AR_KemiringanLereng_6_2.png" /> 15 - 25%<br />\
    <img src="styles/legend/AR_KemiringanLereng_6_3.png" /> 25 - 40%<br />\
    <img src="styles/legend/AR_KemiringanLereng_6_4.png" /> >40%<br />' });
var format_AR_RawanBanjir_7 = new ol.format.GeoJSON();
var features_AR_RawanBanjir_7 = format_AR_RawanBanjir_7.readFeatures(json_AR_RawanBanjir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_RawanBanjir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_RawanBanjir_7.addFeatures(features_AR_RawanBanjir_7);
var lyr_AR_RawanBanjir_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_RawanBanjir_7, 
                style: style_AR_RawanBanjir_7,
                popuplayertitle: 'AR_RawanBanjir',
                interactive: true,
    title: 'AR_RawanBanjir<br />\
    <img src="styles/legend/AR_RawanBanjir_7_0.png" /> Sangat Rawan<br />\
    <img src="styles/legend/AR_RawanBanjir_7_1.png" /> Rawan<br />\
    <img src="styles/legend/AR_RawanBanjir_7_2.png" /> Tidak Rawan<br />' });

lyr_SatelitegoogleMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_AR_CurahHujan_2.setVisible(true);lyr_AR_Sungai_3.setVisible(true);lyr_AR_Landuse_4.setVisible(true);lyr_AR_JenisTanah_5.setVisible(true);lyr_AR_KemiringanLereng_6.setVisible(true);lyr_AR_RawanBanjir_7.setVisible(true);
var layersList = [lyr_SatelitegoogleMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_AR_CurahHujan_2,lyr_AR_Sungai_3,lyr_AR_Landuse_4,lyr_AR_JenisTanah_5,lyr_AR_KemiringanLereng_6,lyr_AR_RawanBanjir_7];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AR_CurahHujan_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_Sungai_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_Landuse_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_JenisTanah_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Jenis_Tana': 'Jenis_Tana', });
lyr_AR_KemiringanLereng_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_RawanBanjir_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'keterangan': 'keterangan', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AR_CurahHujan_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_Sungai_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_Landuse_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_JenisTanah_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Jenis_Tana': 'TextEdit', });
lyr_AR_KemiringanLereng_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_RawanBanjir_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'header label - always visible', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_AR_CurahHujan_2.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_Sungai_3.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_Landuse_4.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_JenisTanah_5.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Jenis_Tana': 'header label - always visible', });
lyr_AR_KemiringanLereng_6.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_RawanBanjir_7.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'keterangan': 'header label - always visible', });
lyr_AR_RawanBanjir_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});