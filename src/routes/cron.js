////////////////////////////////////////////////////////////
const express = require("express");
const router = express.Router();
////////////////////////////////////////////////////////////

const getAllCronJobs = require("../controllers/getAllCronJobs");
const startAllCronJobs = require("../controllers/startAllCronJobs");
const stopAllCronJobs = require("../controllers/stopAllCronJobs");
const toggleCronJob = require("../controllers/toggleCronJob");

/* GET prod listing. */
router.get("/getcronjobs", getAllCronJobs);
////////////////////////////

// /* POST prod listing. */
// router.post("/", createProd);
// ////////////////////////////

// /* DELETE prod listing. */
// router.delete("/delete/:id", deleteProd);
// ////////////////////////////

// /* PUT prod listing. */
router.put("/startallcronjobs", startAllCronJobs);
router.put("/stopallcronjobs", stopAllCronJobs);
router.put("/togglecronjob", toggleCronJob);
// router.put("/restore/:id", restoreProd);
// ////////////////////////////
module.exports = router;
