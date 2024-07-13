const cronJobsServices = require("../services/CronService.js");

const stopAllCronJobs = (req, res, next) => {
  console.log("stopAllCronJobs");
  // console.log(cronJobsServices.inActiveCronJobs);
  try {
    // console.log("controller", cronJobsServices.inActiveCronJobs);
    cronJobsServices.stopAllCronJobs();
    const cronJobs = cronJobsServices.getCronJobs().map((cronJob) => ({
      title: cronJob.title,
      state: cronJob.state,
    }));
    // console.log("log");
    // console.log(cronJobs);
    res.status(200).json(cronJobs);
  } catch (err) {
    next(err);
  }
};

module.exports = stopAllCronJobs;
