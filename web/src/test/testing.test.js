/* const suma = require("../js/suma");

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
}); */

const testing = require("../js/testing");

test("el área de un cuadrado de lado 3 es 9", () => {
  expect(testing.getSquareArea()).toBe(0);
});

test("el área de un triángulo de altura y base 3 es 4.5", () => {
  expect(testing.getTriangleArea(3, 3)).toBe(4.5);
});

test("Compr validador del nombre revisa txtos vacios", () => {
  const name = "";
  const error = verifyName(name);
  expect(error).toBe("EL nombre no puede ser quedarse vacio");
});

test("Compr validador del nombre revisa txtos vacios", () => {
  const name = "a";
  const error = verifyName(name);
  expect(error).toBe("EL nombre no puede ser quedarse vacio");
});

test("Compr validador del nombre revisa txtos vacios", () => {
  const name = "Cristina4";
  const error = verifyName(name);
  expect(error).toBe("EL nombre no puede ser quedarse vacio");
});

test("Compr validador del nombre sea correctos", () => {
  const name = "Cristina Blanco";
  const error = verifyName(name);
  expect(error).toBe("");
});
