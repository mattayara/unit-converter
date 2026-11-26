// convert.js - the "brain" of the app. Pure functions = easy to test.

function round2(n) {
  return Math.round(n * 100) / 100;
}

function celsiusToFahrenheit(c) {
  return round2((c * 9) / 5 + 32);
}

function fahrenheitToCelsius(f) {
  return round2(((f - 32) * 5) / 9);
}

function kmToMiles(km) {
  if (km < 0) throw new Error("Distance can't be negative");
  return round2(km * 0.621371);
}

function milesToKm(miles) {
  if (miles < 0) throw new Error("Distance can't be negative");
  return round2(miles * 1.609344);
}

// Every conversion the page offers. Add a line here and it appears in the dropdown.
const CONVERSIONS = {
  "c-f": { label: "Celsius → Fahrenheit", from: "°C", to: "°F", fn: celsiusToFahrenheit },
  "f-c": { label: "Fahrenheit → Celsius", from: "°F", to: "°C", fn: fahrenheitToCelsius },
  "km-mi": { label: "Kilometres → Miles", from: "km", to: "mi", fn: kmToMiles },
  "mi-km": { label: "Miles → Kilometres", from: "mi", to: "km", fn: milesToKm },
};

function convert(value, type) {
  const c = CONVERSIONS[type];
  if (!c) throw new Error("Unknown conversion: " + type);
  return value + " " + c.from + " = " + c.fn(value) + " " + c.to;
}

// Lets the test file (Node.js) use these functions. The browser ignores this.
if (typeof module !== "undefined") {
  module.exports = { celsiusToFahrenheit, fahrenheitToCelsius, kmToMiles, milesToKm, convert };
}
