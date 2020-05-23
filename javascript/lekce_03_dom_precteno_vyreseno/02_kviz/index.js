// Stáhněte si připravenou stránku. Napište JavaScriptový program, který vybere element s třídou question a nastaví jeho obsah na nějakou kvízovou otázku, například

// Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.
// Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. V opačném případě přidejte třídu answer--wrong. Dejte pozor, abyste nesmazali původní třídu answer.

console.log('funguju!');

const question = 'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.'

const answer = prompt(question)

const questionElm = document.querySelector('.question')

questionElm.textContent = question

const answerPromptElm = document.querySelector('.answer__text')

answerPromptElm.textContent = answer

const answerElm = document.querySelector('.answer')

if (answer === 'Bell') {
  answerElm.className = 'answer answer--correct'
} else {
  answerElm.className = 'answer answer--wrong'
}