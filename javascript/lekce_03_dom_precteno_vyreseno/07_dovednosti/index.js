'use strict';
//nejosekanejsi verze

const updateSkill = (id, skill) => {
  const value = document.querySelector('#' + id + ' .skill__value')
  value.textContent = skill + ' / 100'
  const progress = document.querySelector('#' + id + ' .skill__progress')
  progress.style.width = skill + '%'
}

updateSkill('skill1', Number(prompt('Kolik procent z html umíš?')))
updateSkill('skill2', Number(prompt('Kolik procent z CSS umíš?')))
updateSkill('skill3', Number(prompt('Kolik procent z JS umíš?')))


//moje verze pred zkracenim

// const html = Number(prompt('Kolik procent z html umíš?'))
// const htmlId = '#skill1'

// const css = Number(prompt('Kolik procent z css umíš?'))
// const cssId = '#skill2'

// const js = Number(prompt('Kolik procent z js umíš?'))
// const jsId = '#skill3'

// const updateSkill = (selector, skill) => {
//   const value = document.querySelector(selector + ' .skill__value')
//   value.textContent = skill + ' / 100'
//   const progress = document.querySelector(selector + ' .skill__progress')
//   progress.style.width = skill + '%'
// }

// updateSkill(htmlId, html)
// updateSkill(cssId, css)
// updateSkill(jsId, js)

// původní verze bez sjednocujici funkce

// const htmlElValue = document.querySelector('#skill1 .skill__value')
// htmlElValue.textContent = html + ' / 100'

// const htmlElProgress = document.querySelector('#skill1 .skill__progress')
// htmlElProgress.style.width = html + '%'
