const { Prod, Tag, Artesano } = require("../../db");

const getAllProd = async () => {
  try {
    console.log("getAllProd");
    const prods = await Prod.findAll({
      include: [{ model: Tag }, { model: Artesano }],
      paranoid: true,
    });

    if (prods) {
      const prodsConStatusTrue = prods.filter(
        (prod) => prod.dataValues.Artesano.status === true
      );
      return prodsConStatusTrue;
    } else {
      return { value: false, message: "no se encontraron Productos" };
    }
  } catch (err) {
    return err;
  }
};

module.exports = getAllProd;
