// constroller en desuso
const cronPostHistory = require("../functions/cron/cronPostHistory");

const tooglePostHistory = async (req, res, next) => {
  try {
    const { toogle } = req.body;
    const status = cronPostHistory(toogle);
    if (status) {
      res.status(200).json({
        message: "cronPostHistory activado satisfactoriamente",
        success: true,
      });
    } else {
      res.status(200).json({
        message: "cronPostHistory desativado satisfactoriamente",
        success: true,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tooglePostHistory;
