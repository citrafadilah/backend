var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const KategoriController = require("../controller/kategori");

//insert
router.post("/", checkAuth, KategoriController.createKategori);

//select
router.get("/", checkAuth, KategoriController.readKategori);

//delete
router.delete("/:id", checkAuth, KategoriController.deleteKategori);

//update
router.put("/:id", checkAuth, KategoriController.updateKategori);

module.exports = router;