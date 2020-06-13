  let main = document.querySelector("#map");
let center = SMap.Coords.fromWGS84(14.41790, 50.12655);
let map = new SMap(main, center, 1);
map.addDefaultLayer(SMap.DEF_BASE).enable();
map.addDefaultControls();

//hledani souradnic
function odpoved(response) {
  let results = response.getResults()[0].results
  const cordX = results[0].coords.x;
  const cordY = results[0].coords.y;
  let center = SMap.Coords.fromWGS84(cordX, cordY);
  map.setCenterZoom(center,14);
}

const kliknuto = () => {
  const address = document.querySelector('#street').value;
  new SMap.Geocoder(address, odpoved);
}

document.querySelector('button').addEventListener('click', kliknuto);
