const axios = require("axios");

module.exports = {
  get: async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
