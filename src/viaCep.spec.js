// const axios = require("axios");

const viaCep = require("./viaCep");

// jest.mock("axios");

const expectedResult = {
  cep: "14050-040",
  logradouro: "Rua Coronel Luiz da Cunha",
  complemento: "",
  bairro: "Vila Tibério",
  localidade: "Ribeirão Preto",
  uf: "SP",
  ibge: "3543402",
  gia: "5824",
  ddd: "16",
  siafi: "6969",
};

describe("método get cep", () => {
  it("deve me retornar informações corretas com um cep válido", async () => {
    // axios.get.mockResolvedValue({ data: expectedResult });

    const result = await viaCep.get("14050040");

    expect(result).toEqual(expectedResult);
  });

  it("deve me retornar erro ao passar um cep inválido mas com 8 caracteres", async () => {
    // axios.get.mockResolvedValue({ data: { erro: "true" } });

    const result = await viaCep.get("12345678");

    expect(result).toEqual({ erro: "true" });
  });

  // it("deve me retornar erro ao passar um cep inválido", async () => {
  //   // axios.get.mockResolvedValue({ data: { erro: "true" } });
  //   expect.assertions(1);

  //   try {
  //     await viaCep.get("123");
  //   } catch (e) {
  //     expect(e).toEqual([
  //       Error: Request failed with status code 400,
  //     ]);
  //   }
  // });
});
