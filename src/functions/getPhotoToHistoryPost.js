const getAllPhotos = require("./dbFunctions/getAllPhotos");
const pickRandom = require("../utils/pickRandom");

const getPhotoToHistoryPost = async () => {
  console.log("getPhotoToHistoryPost", new Date());
  const photos = await getAllPhotos();
  const photo = pickRandom(photos, 1);
  const res = photo[0].dataValues;
  return res.img;
};

module.exports = getPhotoToHistoryPost;
