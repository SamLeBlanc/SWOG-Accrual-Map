// These methods deal with the process of adding Mapbox sources and layers, the foundation of the map object
// In total, this map uses 3 sources and 7* layers
// To learn more about sources, visit: https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
// To learn more about layers, visit: https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/

function addSources(){
  // State (and selected country) outlines
  map.addSource('states', {
    type: 'vector',
    url: 'mapbox://samleblanc.2ng14dgl',
    generateId: true,
  });
  // Locations of clusters of institutions
  map.addSource('NCI_cluster_locations', {
    type: 'geojson',
    data: institution_locations,
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 35,
    clusterMinPoints: 3,
  });
  // Locations of all NCI institutions
  map.addSource('NCI_all_locations', {
    type: 'geojson',
    data: institution_locations,
  });
}

function addLayers(){
  // State outlines
  map.addLayer({
    id: 'lines',
    type: 'line',
    source: 'states',
    'source-layer': 'finalMap-ap9nu3',
    layout: {'visibility': 'visible'},
    paint: {'line-color': '#FFFFFF', 'line-opacity': 1, 'line-width':1}
  });
  // State fills
  map.addLayer({
    id: 'states-join',
    type: 'fill',
    source: 'states',
    'source-layer': 'finalMap-ap9nu3',
    paint: {
      'fill-color': matchExpression
      }
    });
  // State outlines when hovering
  map.addLayer({
    id: 'district-borders',
    type: 'line',
    source: 'states',
    'source-layer': 'finalMap-ap9nu3',
    layout: {'visibility': 'visible'},
    paint: {
      'line-color': ['case',['boolean', ['feature-state', 'hold'], false], '#FFFF00',['boolean', ['feature-state', 'hover'], false], '#FFFF00', '#FFFFFF'],
      'line-width': ['case',['boolean', ['feature-state', 'hold'], false], 4,['boolean', ['feature-state', 'hover'], false], 4, 1],
      'line-opacity': ['case',['boolean', ['feature-state', 'hold'], false], 1,['boolean', ['feature-state', 'hover'], false], 1, 0.8],
          }
  });
  // points showing locations of all institutions
  map.addLayer({
    id: 'points',
    type: 'circle',
    source: 'NCI_all_locations',
    paint: {
      'circle-color': 'yellow',
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 2, 0, 10, 10],
      'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 2, 0, 2.01, 1.5],
      'circle-stroke-color': 'black'
    }
  });
  // clusters showing locations of institution groupings
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'NCI_cluster_locations',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': 'black',
      'circle-opacity':1,
      'circle-radius': 14,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#FFFFFF',
    },
    'layout': {'visibility': 'none'},
  });
  // text showing the number of institutions per cluster
  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'NCI_cluster_locations',
    filter: ['has', 'point_count'],
    layout: {
      'visibility': 'none',
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 16,
      'text-allow-overlap': true
    },
    paint: {
      "text-color": "#ffffff"
    }
  });
  // *idk what this layer is but removing it breaks the hover effect
  map.addLayer({
    id: 'base-districts',
    type: 'fill',
    source: 'states',
    'source-layer': 'finalMap-ap9nu3',
    layout: {'visibility': 'visible'},
    paint: {'fill-color': '#000000', 'fill-opacity': 0}
  });
}
