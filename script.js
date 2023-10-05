function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultContainer = document.getElementById("resultContainer");
    var convertedTemperature;

    if (unitSelect === "celsius") {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      resultContainer.innerHTML = temperatureInput + " °C = " + convertedTemperature + " °F";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      resultContainer.innerHTML = temperatureInput + " °F = " + convertedTemperature + " °C";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      resultContainer.innerHTML = temperatureInput + " K = " + convertedTemperature + " °C";
    }
  }