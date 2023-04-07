/* Input de texto */
const inputEl = document.querySelector('#input-text');
const valueEl = document.querySelector('#input-value');

inputEl.addEventListener('input', setValueText);

function setValueText() {
  valueEl.textContent = inputEl.value;
}

/* Input de data */
const inputDateEl = document.querySelector('#input-date');
const valueDateEl = document.querySelector('#input-value-date');

inputDateEl.addEventListener('input', setValueDate);

function setValueDate() {
  valueDateEl.textContent = inputDateEl.valueAsDate;
}

/* Input de range */
const inputRangeEl = document.querySelector('#input-range');
const valueRangeEl = document.querySelector('#input-value-range');

inputRangeEl.addEventListener('input', setValueRange);

function setValueRange() {
  valueRangeEl.textContent = inputRangeEl.value;
}


