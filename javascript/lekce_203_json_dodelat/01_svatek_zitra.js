// Zatím jsme z API pro získávání svátků viděli endpointy /today a /getdate. Existují však ještě další.

// Napište aplikaci, která uživateli zobrazí, kdo má svátek zítra. K tomu použíjte endpoint /tomorrow, který funguje podobně jako endpoint /today.

fetch('https://api.abalin.net/tomorrow?country=cz')
  .then((resp) => resp.json())
  .then((json) => document.write(json.data.namedays.cz));