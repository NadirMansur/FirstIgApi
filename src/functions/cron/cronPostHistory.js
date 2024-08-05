const CronJob = require("cron").CronJob;
const cronJobsServices = require("../../services/CronService.js");
const uploadStoryFromWeb = require("../basicActions/uploadStoryFromWeb.js");
const getPhotoToHistoryPost = require("../getPhotoToHistoryPost.js");

// Tarea progamada para postear un producto aleatorio en IG
const cronPostHistory = () => {
  const cronjob = new CronJob(
    "*/01 * * * *", // Cada 30 segudnos
    // "0 9-21/2 * * *", // cada 2 horas a partir de las 9 AM hasta las 9 PM
    async () => {
      const link = await getPhotoToHistoryPost();
      await uploadStoryFromWeb(link);
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronPostHistory", cronjob);
};

module.exports = cronPostHistory;
