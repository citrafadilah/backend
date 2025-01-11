var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");


const ButikController = require("../controller/butik");

router.post("/", checkAuth, ButikController.createButik);

router.get("/", checkAuth, ButikController.getButiksByUser);

router.delete("/:id", checkAuth, ButikController.deleteButik);

router.put("/:id", checkAuth, ButikController.updateButik);

module.exports = router;
