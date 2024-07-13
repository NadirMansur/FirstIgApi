const CronJob = require("cron").CronJob;
const path = require("path");
const cronJobsServices = require("../../services/CronService.js");
const uploadStory = require("../basicActions/uploadStory.js");

const pathImg = path.join(__dirname, "../../assets/promo1.png");

// Tarea progamada para postear un producto aleatorio en IG
const cronPostPromo1History = () => {
  const cronjob = new CronJob(
    "0 13 * * *", // a las 1PM
    async () => {
      await uploadStory(pathImg);
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronPostPromo1History", cronjob);
};

module.exports = cronPostPromo1History;
