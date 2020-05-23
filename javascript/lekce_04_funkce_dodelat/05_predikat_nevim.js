// Napište funkci find, která jako svůj první parametr očekává funkci pred mající jeden vstup a vracející boolean. Takovým funkcím se občas říká predikáty. Nechť funkce find dále má tři další parametry x, y, z. Funkce find postupně volá funkci pred s těmito parametry a vrátí tu hodnotu, u které funkce pred poprvé vrátí true. Pokud funkce pred nevrátí true ani na jednom z parametrů x, y, z, funkce find nechť vrátí hodnotu null. Tato hodnota se často použivá jako synonymum pro slovo “nic”.
// Příklad použití:
// > find((a) => a % 2 === 0, 1, 4, -5)
// 4
// > find((a) => a < 0, 1, 4, -5)
// -5
// > find((a) => a.length > 5, 'petr', 'pavel', 'jana')
// null

  const find = (pred, x, y, z ) => {
    if (pred === x){
      return x
    } 
    if (pred === y){
      return y
    } 
    if (pred === z){
      return z
    } 
    return null
  } 
