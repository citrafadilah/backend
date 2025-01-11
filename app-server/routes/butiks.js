var express = require("express");
var router = express.Router();

const ButikController = require("../controller/butik");

router.post("/", ButikController.createButik);

router.get("/", ButikController.getButiksByUser);

router.delete("/:id", ButikController.deleteButik);

router.put("/:id", ButikController.updateButik);

module.exports = router;
