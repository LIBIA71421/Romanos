import romano from "./romanos.js";

describe("Numero Romano", () => {
  it("retorna el numero 1 en Romano", () => {
    expect(romano(1)).toEqual("I");
  });
});

describe("Numero Romano", () => {
  it("retorna el numero 2 en Romano", () => {
    expect(romano(2)).toEqual("II");
  });
});

describe("Numero Romano", () => {
  it("retorna del 1-10 en Romano", () => {
    expect(romano(8)).toEqual("VIII");
  });
});

/*import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});*/
