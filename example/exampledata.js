(function() {

  var basemaps = {
    WorldImagery: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
	    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    TopographicBaseMap: L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	    maxZoom: 19,
	    attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  };

  var groups = {
    cities: new L.LayerGroup(),
    restaurants: new L.LayerGroup(),
    ortho2: new L.LayerGroup(),
    ortho3: new L.LayerGroup(),
    ortho4: new L.LayerGroup(),
    ortho5: new L.LayerGroup(),
    ortho1: new L.LayerGroup(),
    dem: new L.LayerGroup()
  };

  L.imageOverlay('img/1994.png', [[39.1619, 42.5084], [39.128, 42.5751]]).addTo(groups.ortho2);
  L.imageOverlay('img/1983.png', [[39.1619, 42.5084], [39.128, 42.5751]]).addTo(groups.ortho3);
  L.imageOverlay('img/1969.png', [[39.1619, 42.5085], [39.1281, 42.5585]]).addTo(groups.ortho4);
  L.imageOverlay('img/1957.png', [[39.1619, 42.5084], [39.128, 42.5751]]).addTo(groups.ortho5);
  L.imageOverlay('img/1955.png', [[39.1619, 42.5084], [39.128, 42.5751]]).addTo(groups.ortho1);
  L.imageOverlay('img/dem.png', [[39.1942, 42.4143], [39.0193, 42.7966]]).addTo(groups.dem);

  L.marker([39.61, -105.02]).bindPopup('Littleton, CO.').addTo(groups.ortho1);
  L.marker([39.74, -104.99]).bindPopup('Denver, CO.').addTo(groups.ortho1);
  L.marker([39.73, -104.8]).bindPopup('Aurora, CO.').addTo(groups.cities);
  L.marker([39.77, -105.23]).bindPopup('Golden, CO.').addTo(groups.cities);

  L.marker([39.69, -104.85]).bindPopup('A restaurant').addTo(groups.restaurants);
  L.marker([39.69, -105.12]).bindPopup('A restaurant').addTo(groups.restaurants);

  window.ExampleData = {
    LayerGroups: groups,
    Basemaps: basemaps
  };

}());


