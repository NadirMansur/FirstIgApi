const cronJobsServices = require("../services/CronService.js");

const toggleCronJob = async (req, res, next) => {
  console.log("toggleCronJob");

  const { title, bool } = req.body;
  try {
    const result = cronJobsServices.toggleCronJob(title, bool);
    // console.log("result", result);
    if (result) {
      const cronJob = cronJobsServices.getCronJob(title);
      // console.log("cronjob", cronJob);
      res.status(200).json({ title: cronJob.title, state: cronJob.state });
    } else {
      const cronJob = cronJobsServices.getCronJob(title);
      res.status(404).json({
        message: "El Cron job no se econtró o ya se encontraba en ese estado.",
        status: false,
        cronjob: { title: cronJob.title, state: cronJob.state },
      });
    }
  } catch (err) {
    console.error("Error toggling cron job:", err);
    next(err);
  }
};

module.exports = toggleCronJob;
