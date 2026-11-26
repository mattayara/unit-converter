const test = require("node:test");
const assert = require("node:assert");
const { celsiusToFahrenheit, fahrenheitToCelsius, kmToMiles, kgToPounds, poundsToKg, convert } = require("./convert.js");

test("0 °C is 32 °F", () => {
  assert.strictEqual(celsiusToFahrenheit(0), 32);
});

test("100 °C is 212 °F", () => {
  assert.strictEqual(celsiusToFahrenheit(100), 212);
});

test("98.6 °F is 37 °C", () => {
  assert.strictEqual(fahrenheitToCelsius(98.6), 37);
});

test("10 km is 6.21 miles", () => {
  assert.strictEqual(kmToMiles(10), 6.21);
});

test("a negative distance is rejected", () => {
  assert.throws(() => kmToMiles(-5));
});

test("convert() writes a full sentence", () => {
  assert.strictEqual(convert(100, "c-f"), "100 °C = 212 °F");
});

test("1 kg is 2.2 pounds", () => {
  assert.strictEqual(kgToPounds(1), 2.2);
});

test("10 pounds is 4.54 kg", () => {
  assert.strictEqual(poundsToKg(10), 4.54);
});

test("a negative weight is rejected", () => {
  assert.throws(() => kgToPounds(-1));
});
