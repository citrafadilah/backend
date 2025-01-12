var express = require("express");
var router = express.Router();
const checkAuth = require("../middleware/check-auth");
const ButikController = require("../controller/butik");

//insert
router.post("/", checkAuth, ButikController.createButik);

//select
router.get("/", checkAuth, ButikController.readButik);

//delete
router.delete("/:id", checkAuth, ButikController.deleteButik);

//update
router.put("/:id", checkAuth, ButikController.updateButik);

module.exports = router;
