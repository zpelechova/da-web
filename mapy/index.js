let main = document.querySelector("#map");
let center = SMap.Coords.fromWGS84(14.41790, 50.12655);
let map = new SMap(main, center, 11);
map.addDefaultLayer(SMap.DEF_BASE).enable();
map.addDefaultControls();
// map.syncPort();
// map.addDefaultLayer(SMap.DEF_TURIST).enable();
// function onClick(e) {
//   let coords = SMap.Coords.fromEvent(e.data.event, map)
//   alert(coords.toWGS84())
// }
// map.getSignals().addListener(window, "map-click", onClick)


//hledani souradnic
function odpoved(response) {
  let results = response.getResults()[0].results
  const cordX = results[0].coords.x;
  const cordY = results[0].coords.y;
  let center = SMap.Coords.fromWGS84(cordX, cordY);
  map.setCenter(center);
}
new SMap.Geocoder("brno", odpoved);

// function odpoved(response) {
//   let results = response.getResults()[0].results;
//   document.body.innerHTML = JSON.stringify(results, null, 2);
// }

// new SMap.Geocoder(`${street}, ${city}, ${zip}`, odpoved);
