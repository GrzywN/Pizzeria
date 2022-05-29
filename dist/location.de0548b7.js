const markerCoordinates = [
    50.815347,
    19.107427
];
const greenIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
const map = L.map("map", {
    center: [
        ...markerCoordinates
    ],
    zoom: 13,
    zoomControl: false,
    attributionControl: false
});
const locationMarker = L.marker(markerCoordinates, {
    icon: greenIcon
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
locationMarker.addTo(map);
locationMarker.bindPopup("Pizzeria Karola");

//# sourceMappingURL=location.de0548b7.js.map
