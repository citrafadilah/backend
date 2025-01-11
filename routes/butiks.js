var express = require('express');
var router = express.Router();

const ButikController = require("../../controller/butik")

//insert
router.post('/',ButikController.createButik);

//select
router.get("/",ButikController.readButik);

//delete
router.delete('/:id',ButikController.deleteButik);

//update
router.put('/:id',ButikController.updateButik);

module.exports = router;