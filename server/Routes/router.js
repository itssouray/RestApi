const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/subjectControllers");


router.post("/subjects",controller.subjectpost);
router.post("/languages/:languageId/chapters",controller.chapterpost);

router.get("/api/language",controller.languageget);
router.get("/api/courses/:id",controller.courseget);

router.put("/languages/:languageId/chapters/:chapterIndex/topics",controller.topicput);




module.exports = router;