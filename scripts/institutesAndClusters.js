function toggle_Clusters(){
  if ($('#cluster-but').is(':checked')){
    map.setLayoutProperty("clusters", 'visibility', 'visible');
    map.setLayoutProperty("cluster-count", 'visibility', 'visible');
  } else {
    map.setLayoutProperty("clusters", 'visibility', 'none');
    map.setLayoutProperty("cluster-count", 'visibility', 'none');
  }
}

function toggle_Institutions(){
  if ($('#all-inst').is(':checked')){
    map.setLayoutProperty("points", 'visibility', 'visible');
  } else {
    map.setLayoutProperty("points", 'visibility', 'none');
  }
}

function patients_per_institute_in_cluster(points){
  var patients_per_institute = [];
  points.forEach(function(p){
    inst_name = p.properties.id;
    d = allData.filter(function(d){
      return (d["INSTNAME"] == p.properties.id )
    })
    patients_per_institute.push([inst_name, d.length])
  });
  patients_per_institute.sort(compareSecondColumn)
  return patients_per_institute
}
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) { return 0; }
    else { return (a[1] < b[1]) ? 1 : -1; }
}
function NCI_htmlList(points){
  list = patients_per_institute_in_cluster(points)
  var m = 0;
  var html_list = 'Institutions:<br>';
  list.forEach(function(p){
    if (m < 10){
      html_list += (m+1).toString().concat(". ")
      html_list += list[m][0] + '<br>'
      m++;
    }
  });
  if (list.length > 10){
    html_list += '<i>and ' + parseInt(list.length - 10) + ' more</i>'
  }
  return html_list
}

function pointOnClick(e){
  console.log('points',e)
  var coordinates = e.features[0].geometry.coordinates.slice();
  var id = e.features[0].properties.id;

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  setTimeout(function(){
    popUp1 = new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(
      'Institution: ' + id
    )
    .addTo(map);
  },170);
}

function clusterOnClick(e){
  console.log('clusters',e)
  var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
  var clusterId = features[0].properties.cluster_id,
  point_count = features[0].properties.point_count,
  clusterSource = map.getSource('NCI_locations');

  clusterSource.getClusterChildren(clusterId, function(err, aFeatures){
    //console.log('getClusterChildren', err, aFeatures);
  });

  clusterSource.getClusterLeaves(clusterId, point_count, 0, function(err, aFeatures){
    pointsInCluster = aFeatures;
    //console.log('pointsinCluster',pointsInCluster)
  })
  var coordinates = e.features[0].geometry.coordinates.slice();
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
 setTimeout(function(){
   new mapboxgl.Popup()
   .setLngLat(coordinates)
   .setHTML(NCI_htmlList(pointsInCluster))
   .addTo(map);
   if (popUp1){
     popUp1.remove()
   };
 }, 200);
}
