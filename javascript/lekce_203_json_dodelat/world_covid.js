let agg = []
fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
  .then((resp) => resp.json())
  .then((json) => {for (i = 0; i < json.length; i++) {
      JSON.parse(json[0])}});

  // for (i = 0; i < json.length; i++) {
  //   agg.push(json[i].country)
  //   document.write(json[i].infected)
  // }
  // document.write(agg)