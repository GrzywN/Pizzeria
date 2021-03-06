export default class LocationMap {
  constructor(markerCoords, popupMessage) {
    this.markerCoords = markerCoords;
    this.popupMessage = popupMessage;
    this.init();
  }

  static createIcon() {
    return new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }

  init() {
    this.icon = LocationMap.createIcon();
    this.leafletMap = this.createMap(this.coords);
    this.addLayerToMap();
    this.marker = this.createMarker();
    this.addMarkerToMap();
    this.bindPopup();
  }

  createMap() {
    return L.map('map', {
      center: [...this.markerCoords],
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });
  }

  addLayerToMap() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.leafletMap);
  }

  createMarker() {
    return L.marker(this.markerCoords, { icon: this.icon });
  }

  addMarkerToMap() {
    this.marker.addTo(this.leafletMap);
  }

  bindPopup() {
    this.marker.bindPopup(this.popupMessage);
  }
}
