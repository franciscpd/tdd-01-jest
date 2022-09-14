module.exports = {
  soma: (n1, n2) => {
    const number1 = parseInt(n1, 10);
    const number2 = parseInt(n2, 10);

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
      throw new Error("Parâmetros inválidos");
    }

    return number1 + number2;
  },
};
