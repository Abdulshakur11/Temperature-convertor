// FORM ELEMENTS FROM HTML
var elForm = document.querySelector('.form');
var elCelsiusInput = document.querySelector('.celsius-input');
var elFahrenheitinput = document.querySelector('.fahrenheit-input');

// RESULRT ELEMENTS FROM HTML
var elCelsiusResult = document.querySelector('.result-celsius');

 // FUNCTION
 elFahrenheitinput.addEventListener('input', function(){
  var elFahrenheitNumber = (parseFloat(elFahrenheitinput.value.trim(), 10)- 32 ) * 5/9;
  elCelsiusInput.value = elFahrenheitNumber;
  elCelsiusResult.textContent = '(' + elFahrenheitinput.value + '°F-32)×5/9'
 });


 elCelsiusInput.addEventListener('input', function(){
  var elCelsiusNumber = parseFloat(elCelsiusInput.value.trim(), 10) * 9/5 + 32;
  elFahrenheitinput.value = elCelsiusNumber;
  elCelsiusResult.textContent = elCelsiusInput.value + '°C×9/5+32'
 });