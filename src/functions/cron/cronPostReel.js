const CronJob = require("cron").CronJob;
const cronJobsServices = require("../../services/CronService.js");
const postPhotoToInstaFromWeb = require("../basicActions/postPhotoToInstaFromWeb.js");
const makeCaptionToPost = require("../openAi/makeCaptionToPost.js");

// Tarea progamada para postear un producto aleatorio en IG
const cronPostReel = () => {
  const cronjob = new CronJob(
    "0 9-21/3 * * *", // cada 3 horas a partir de las 9 AM hasta las 9 PM
    async () => {
      const data = await makeCaptionToPost();
      await postPhotoToInstaFromWeb(data.link, data.caption);
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronPostReel", cronjob);
};

module.exports = cronPostReel;
