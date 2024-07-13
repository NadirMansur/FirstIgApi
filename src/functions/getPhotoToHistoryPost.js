const getAllProd = require("./dbFunctions/getAllProd");
const pickRandom = require("../utils/pickRandom");

const getProdToPost = async () => {
  console.log("getProdToPost");
  const prods = await getAllProd();
  const prod = pickRandom(prods, 1);
  const res = prod[0].dataValues;

  return res.img_1;
};

module.exports = getProdToPost;
