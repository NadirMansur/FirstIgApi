const cronJobsServices = require("../services/CronService.js");

const startAllCronJobs = (req, res, next) => {
  console.log("startAllCronJobs");
  // console.log(cronJobsServices.inActiveCronJobs);
  try {
    // console.log("controller", cronJobsServices.inActiveCronJobs);
    cronJobsServices.startAllCronJobs();
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

module.exports = startAllCronJobs;
