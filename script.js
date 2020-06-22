var kelvinTemp = 301;
var celciusTemp = (kelvinTemp - 273.15);
var fahrenheitTemp = celciusTemp * (9/5) + 32;

var fahrenheitRound = Math.floor(fahrenheitTemp);

console.log("The temperature is: " + fahrenheitRound + " degrees Fahrenheit.");