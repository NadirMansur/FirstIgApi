const { Galeria } = require("../../db");

const getAllPhotos = async () => {
  try {
    console.log("getAllPhotos");
    const photos = await Galeria.findAll();
    if (photos) {
      return photos;
    } else {
      return { value: false, message: "no se encontraron Productos" };
    }
  } catch (err) {
    return err;
  }
};

module.exports = getAllPhotos;
