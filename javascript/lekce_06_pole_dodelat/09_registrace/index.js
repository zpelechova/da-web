'use strict';

const users = [
  'petr',
  'jana-34',
  'husky16',
  '66beruska',
  'thegodofU',
  'rene_gade',
  'tommy',
  'luciluci',
  'tanko',
  'poltergeist',
  'hlava-havla',
  'telo-ramba'
];


const btnRegister = document.querySelector('#btn-register')
btnRegister.addEventListener('click', () => {
  const userElm = document.querySelector('#username')
  console.log('Uživatelské jméno je ' + userElm.value);
  if (users.includes(userElm.value)) {
    alert('Pozor, toto uživatelské jméno je už obsazené, vyberte jiné.')
  } else {
    const pwdElm = document.querySelector('#pass1')
    console.log('Heslo je ' + pwdElm.value)
    if (pwdElm.value.includes('-') || pwdElm.value.includes('_') || pwdElm.value.includes(':') || pwdElm.value.length >= 10) {
      console.log('Heslo je v pořádku')
      const pwd2Elm = document.querySelector('#pass2')
      console.log('Opakované heslo je ' + pwd2Elm.value)
      if (pwd2Elm.value === pwdElm.value){
        console.log('Hesla jsou stejná')
      } else {
        alert('Pozor, hesla neodpovídají.')
      }
  } else {
      alert('Vaše heslo není dostatečně silné.')
    }
  }
})

// check hesla podle Filipa:
// const checkPasswordIsSecure = () => {
// 	const password = getPassword1()
// 	const isPaswordLongEnough = password.length >= 10
// 	const passwordIncludesDash = password.includes('-')
// 	const passwordIncludesUnderscore = password.includes('_')
// 	const passwordIncludesColon = password.includes(':')
// 	return (
// 		isPaswordLongEnough ||
// 		passwordIncludesDash ||
// 		passwordIncludesUnderscore ||
// 		passwordIncludesColon
// 	)
// }
