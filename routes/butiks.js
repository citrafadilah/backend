var express = require('express');
var router = express.Router();

const ButikController = require("../../controller/butik")
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//insert
router.post('/',ButikController.createButik);

//select
router.get("/",ButikController.readButik);

//delete
router.delete('/:id',ButikController.deleteButik);

//update
router.put('/:id',ButikController.updateButik);

module.exports = router;
