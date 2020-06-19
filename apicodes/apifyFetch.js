const encodeURIParam = (stringParam) => {
  return encodeURI(stringParam.replace(/\s/g, '+'));
};
const street = encodeURI("Jindřicha Plachty 15");
const city = encodeURI("Praha 5");
const zip = encodeURI("15000");

const url = "https://api.apify.com/v2/acts/zuzka~rohlik/runs?token=WDXyEPPmbeKBX5eHAyiszBHQ7";

fetch(url, {
  "body": `{"street": "Jindřicha Plachty 15", "city": "Praha", "zip": "15000" }`,
  "method": "POST",
  "headers": { 'Content-Type': 'application/json' }
}
)
  .then((resp) => resp.json())
  .then((json) => console.log(json.data));
