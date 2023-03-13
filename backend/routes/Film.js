const express = require("express");
const router = express.Router();
const { upload } = require("../fileUpload");
const { isAuth, isAdmin } = require("../util");

const {
  getFilms,
  getFilm,
  createFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/Film");

router.get("/", getFilms);
router.get("/:id", getFilm);
router.post("/", upload.fields([{ name: "image", maxCount: 1 }]), createFilm);
router.put('/:id', upload.fields([{ name: "image", maxCount: 1 }]), updateFilm);
router.delete("/:id", deleteFilm);

module.exports = router;
