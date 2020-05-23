// Vytvořte funkci jménem apply, která jako svoje parametry bere funkci f a vstup x. Funkce apply vrátí výsledek funkce f zavolané na vstup x. Zavolejte funkci apply s více různými vstupy a sledujte výsledky.

const apply = (f, x) => f(x)

// Napište funkci max, která jako svoje parametry bere dvě funkce f, g a vstup y. Funkce max zavolá obě tyto funkce se vstupem y a vrátí větší z obou výsledků.
const max1 = (f, g, y) => {
  if (f(y) > g(y)){
    return f(y)
  } else if (g(y) > f(y)) {
    return g(y)
  } else {
    return('Oba výsledky jsou stejné.')
  }
}