const generateText = require("./generateText");
const getProdToPost = require("../getProdToPost");

const cadenaDeTags = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += `#${array[i]} `;
  }
  return string;
};

const makeCaptionToPost = async () => {
  console.log("makeCaptionToPost");
  const prodInfo = await getProdToPost();
  const intruction =
    "debes generar un caption para vender y publicar una producto en instagram, mencionando un dato de a la artesania, ten en cuenta los siguiente datos del producto:";
  const userContent = `titulo del producto: ${prodInfo.title}, descripccion: ${
    prodInfo.description
  }, palabras clave: ${cadenaDeTags(prodInfo.tags)} `;
  const caption = await generateText(intruction, userContent);
  return { link: prodInfo.img, caption };
};

module.exports = makeCaptionToPost;
