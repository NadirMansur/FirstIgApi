const CronJob = require("cron").CronJob;
const cronJobsServices = require("../../services/CronService.js");
const activateBackend = require("../activateBackend.js");

// Tarea progamada para postear un producto aleatorio en IG
const cronActivateBackend = () => {
  const cronjob = new CronJob(
    "*/30 * * * *", // Cada 30 minutos
    async () => {
      await activateBackend();
    },
    null,
    true,
    "America/Argentina/Buenos_Aires"
  );
  cronJobsServices.cronJobSave("cronActivateBackend", cronjob);
};

module.exports = cronActivateBackend;
