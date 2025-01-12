const Kategori = require('../model/kategori');

const createKategori = (req, res) => {
    const kategori = new Kategori({
        nama: req.body.nama,
        creator: req.userData.userid,
    });

    kategori
        .save()
        .then((createdKategori) => {
            res.status(201).json({
                message: 'Data berhasil disimpan',
                bookId: createdKategori._id,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'internal server error !' + err,
            });
        });
}

const readKategori = (req, res) => {
    Kategori.find()
        .then((documents) => {
            res.status(201).json({
                message: 'Get Data Kategori',
                kategoris: documents,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'internal server error !',
            });
        });
}

const deleteKategori = (req, res) => {
    Kategori.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json({
                message: 'Kategori berhasil dihapus ',
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'internal server error !',
            });
        });
}

module.exports = {
    createKategori,
    readKategori,
    deleteKategori,
};