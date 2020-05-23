/*funkce na vložení data do inoputu - parametr funkce ID elementu pro datum  */
function setDate(datePlaceholder) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10) {
    month = "0" + month
  }
  if (day < 10) {
    day = "0" + day
  }

  const today = day + "." + month + "." + year;

  document.getElementById(datePlaceholder).value = today;
}

setDate('date')