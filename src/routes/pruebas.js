////////////////////////////////////////////////////////////
const express = require("express");
const router = express.Router();

////////////////////////////////////////////////////////////
const pruebaCaption = require("../controllers//ignore/pruebaCaption");

// const allTags = require("../controllers/allTags");
// const filterBooks = require("../controllers/filterBooks");
// const findById = require("../controllers/findById");
// const allLanguage = require("../controllers/allLanguage");
// const allAuthors = require("../controllers/allAuthors");
//const getAllRatingBook = require('../controllers/ratingBook');

/* GET prod listing. */
router.get("/", pruebaCaption);
////////////////////////////

// /* POST prod listing. */
// router.post("/", createProd);
// ////////////////////////////

// /* DELETE prod listing. */
// router.delete("/delete/:id", deleteProd);
// ////////////////////////////

// /* PUT prod listing. */
// router.put("/update", modifyProd); //"/update/:id"
// router.put("/restore/:id", restoreProd);
// ////////////////////////////
module.exports = router;
