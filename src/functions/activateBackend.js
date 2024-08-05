require("dotenv").config();
const axios = require("axios");

const activateBackend = async () => {
  const response = await axios.get(process.env.VITE_GET_ARTS);
  console.log("se cargo la WEB a las: ", new Date());
  return response;
};

module.exports = activateBackend;
