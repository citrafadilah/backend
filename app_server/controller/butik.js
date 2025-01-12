const Butik = require("../model/butik");

const createButik = (req, res) => {
  const butik = new Butik({
    nama: req.body.nama,
    harga: req.body.harga,
    kategori: req.body.kategori,
    creator: req.userData.userid,
  });

  //res.status(201).json({ butiknya: req.userData.userid });
  //console.log(butik);
  butik
    .save()
    .then((createdButik) => {
      res.status(201).json({
        message: "Data berhasil disimpan",
        bookId: createdButik._id,
      });
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).json({
        message: "internal server error !" + err,
        //error: err,
      });
    });
};

const readButik = (req, res) => {
  Butik.find()
    .then((documents) => {
      res.status(201).json({
        message: "Get Data Butik",
        butiks: documents,
      });
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).json({
        message: "internal server error !",
        //error : err
      });
    });
};

const deleteButik = (req, res) => {
  Butik.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "Butik berhasil dihapus ",
        result: result,
      });
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).json({
        message: "internal server error !",
        //error : err
      });
    });
};

const updateButik = (req, res) => {
  const butik = new Butik({
    _id: req.params.id,
    nama: req.body.nama,
    harga: req.body.harga,
    kategori: req.body.kategori,
  });

  Butik.updateOne({ _id: req.params.id }, butik)
    .then((hasil) => {
      res.status(200).json({
        message: "Update Berhasil",
        result: hasil,
      });
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).json({
        message: "internal server error !",
        //error : err
      });
    });
};

module.exports = { createButik, readButik, deleteButik, updateButik };
