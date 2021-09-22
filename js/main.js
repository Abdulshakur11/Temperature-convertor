// FORM ELEMENTS FROM HTML
var elForm = document.querySelector('.form');
var elCelsiusInput = document.querySelector('.celsius-input');
var elFahrenheitinput = document.querySelector('.fahrenheit-input');

// RESULRT ELEMENTS FROM HTML
var elCelciusResult = document.querySelector('.result-celsius');

// FUNCTION
 elCelsiusInput.addEventListener('input', function(){
  var elFahrenheitResult = parseFloat(elCelsiusInput.value.trim(), 10) * 9/5 + 32;
  elFahrenheitinput.value = elFahrenheitResult;
  elCelciusResult.textContent = elCelsiusInput.value + '°C×9/5+32 =' + elFahrenheitResult;
 });


 // FUNCTION
 elFahrenheitinput.addEventListener('input', function(){
  var elCelsiusResult = (parseFloat(elFahrenheitinput.value.trim(), 10)- 32 ) * 5/9;
  elCelsiusInput.value = elCelsiusResult;
  elCelciusResult.textContent = '(' + elFahrenheitinput.value + '°F-32)×5/9 =' + elCelsiusResult;
 });
