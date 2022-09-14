const { soma } = require("./calculator");

describe("Função soma", () => {
  it("quando eu passar 2 e 2 deve me retornar 4", () => {
    expect(soma(2, 2)).toBe(4);
  });

  it("quando eu passar 2 e 2 como string deve me retornar 4", () => {
    expect(soma("2", "2")).toBe(4);
  });

  it("deve retornar erro sempre que não for passado parâmetros válidos para soma", () => {
    expect(() => {
      soma("", 2);
    }).toThrowError();

    expect(() => {
      soma(null, null);
    }).toThrowError();

    expect(() => {
      soma([2, 3], []);
    }).toThrowError();

    expect(() => {
      soma({}, "2");
    }).toThrowError();
  });
});
