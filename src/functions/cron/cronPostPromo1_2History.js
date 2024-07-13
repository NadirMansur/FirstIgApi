const CronJob = require("cron").CronJob;
const path = require("path");
const cronJobsServices = require("../../services/CronService.js");
const uploadStory = require("../basicActions/uploadStory.js");

const pathImg = path.join(__dirname, "../../assets/promo1_2.png");

// Tarea progamada para postear un producto aleatorio en IG
const cronPostPromo1_2History = () => {
  const cronjob = new CronJob(
    "10 21 * * *", // a las 9:10 PM
    async () => {
      await uploadStory(pathImg);
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronPostPromo1_2History", cronjob);
};

module.exports = cronPostPromo1_2History;
