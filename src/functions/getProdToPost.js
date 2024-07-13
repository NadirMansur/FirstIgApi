const getAllProd = require("./dbFunctions/getAllProd");
const pickRandom = require("../utils/pickRandom");

const getProdToPost = async () => {
  console.log("getProdToPost");
  const prods = await getAllProd();
  const prod = pickRandom(prods, 1);
  const res = prod[0].dataValues;
  const tags = [];
  res.Tags.forEach((tag) => {
    tags.push(tag.dataValues.name);
  });
  const returnInfo = {
    title: res.prod_name,
    img: res.img_1,
    description: res.description,
    tags: tags,
  };
  return returnInfo;
};

module.exports = getProdToPost;
