/* OGD Wien Beispiel */


let stephansdom = {
lat: 48.208493,
lng: 16.373118,
title: "Stephansdom"
};

let startLayer = L.titeLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    center: [ stephansdom.lat, stephansdom.lng],
    zoom: 12,
    layers: [
        startLayer
    ],
});

let layerControl = L.control.layers(
    {
        "BasemapAT Grau": startLayer,
        "Basemap Standard": L.titeLayer.provider("BasemapAT.basemap"),
    }).addTo(map);