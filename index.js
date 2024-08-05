require("dotenv").config();
const app = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;
const cronPostHistory = require("./src/functions/cron/cronPostHistory.js");
const cronPostReel = require("./src/functions/cron/cronPostReel.js");
const cronPostPromo1_2History = require("./src/functions/cron/cronPostPromo1_2History.js");
const cronPostPromo1History = require("./src/functions/cron/cronPostPromo1History.js");
const cronPostMarcaHistory = require("./src/functions/cron/cronPostMarcaHistory.js");
const cronActivateBackend = require("./src/functions/cron/cronActivateBackend.js");
const cronJobsServices = require("./src/services/CronService.js");

async function main() {
  try {
    // Autenticar la conexión con la base de datos
    await conn.authenticate();
    console.log("Connection has been established successfully.");
    // Sincronizar el modelo de la base de datos
    conn.sync({ /* force: true */ alter: true }).then(() => {
      // Iniciar el servidor web en el puerto especificado
      app.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
        cronPostHistory();
        cronPostReel();
        cronPostPromo1_2History();
        cronPostPromo1History();
        cronPostMarcaHistory();
        cronActivateBackend();
        cronJobsServices.stopAllCronJobs();
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
