// Založte JavaScriptový program a vytvořte v něm pole, které bude reprezentavat rozehranou šachovou partii jako na obrázku.
// Šachovnici reprezentujte jako pole polí, kde každý řádek je reprezentován jako jedno pole. Políčka reprerezentujte jako čísla dle následujícího klíče.
// 0 - prázné políčko
// 1 - pěšec
// 2 - věž
// 3 - kůň
// 4 - střelec
// 5 - dáma
// 6 - král
// Otevřete tento program v konzoli a napište příkaz, který přesune bílého koně z pozice f3 na pozici e5.
const sachovnice =
  [
    [0, 0, 0, 0, 0, 5, 6, 0],
    [0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 1],
    [0, 0, 0, 0, 4, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 6, 0]
  ];

  sachovnice[5][5] = 0;
  sachovnice[3][4] = 3; 
