const CronJob = require("cron").CronJob;
const path = require("path");
const cronJobsServices = require("../../services/CronService.js");
const uploadStory = require("../basicActions/uploadStory.js");

const pathImg = path.join(__dirname, "../../assets/merlinMarca.png");

// Tarea progamada para postear un producto aleatorio en IG
const cronPostMarcaHistory = () => {
  const cronjob = new CronJob(
    "15 21 * * *", // a las 9: 15PM
    async () => {
      await uploadStory(pathImg);
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronPostMarcaHistory", cronjob);
};

module.exports = cronPostMarcaHistory;
