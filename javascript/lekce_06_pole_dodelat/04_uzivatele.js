// Mejmě následující seznam uživatelů.
const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'misa'];
// Pomocí cyklu FOR vypište všechna tato čísla do konzole.
for (i = 0; i < users.length; i += 1) {
  console.log(users[i])
}

// Do konzole vypište všechna jména jako emailové adresy z domény gmail.com. Uživatel ‘paja’ tak bude ‘paja@gmail.com’.

for (i = 0; i < users.length; i += 1) {
  console.log(users[i] + '@gmail.com')
}

// Vypište do konzole emaily pouze těch uživatelů, jejichž jméno má nejvýše 4 znaky.

for (i = 0; i < users.length; i += 1) {
  if (users[i].length <= 4) {
    console.log(users[i] + '@gmail.com')
  }
}