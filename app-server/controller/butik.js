const Butik = require("../model/butiks");

exports.getButiksByUser = (req, res) => {
  const userId = req.query.userId; 

  if (!userId) {
    return res.status(400).json({
      message: "User ID is required",
    });
  }

  Butik.find({ user: userId })
    .then((butiks) => {
      console.log(butiks);
      res.json({ message: "Butiks retrieved successfully", butiks });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving butiks", error: err });
    });
};

exports.createButik = (req, res) => {
  const butik = new Butik({
    nama: req.body.nama,
    harga: req.body.harga,
    categories: req.body.categories,
  });

  console.log(butik);
  butik
    .save()
    .then((createdButik) => {
      res.status(201).json({
        message: "Data berhasil disimpan",
        butikId: createdButik._id,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error!",
      });
    });
};

exports.createNewButik = (req, res) => {
  const { nama, harga, categories } = req.body;

  const newButik = new Butik({
    nama,
    harga,
    categories,
  });

  newButik
    .save()
    .then((butik) => res.status(201).json(butik))
    .catch((err) =>
      res.status(400).json({ message: "Error creating butik", error: err })
    );
};

exports.deleteButik = (req, res) => {
  const { id } = req.params;

  Butik.findByIdAndDelete(id)
    .then(() => res.json({ message: "Butik deleted successfully" }))
    .catch((err) =>
      res.status(400).json({ message: "Error deleting butik", error: err })
    );
};

exports.updateButik = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  Butik.findByIdAndUpdate(id, updates, { new: true })
    .then((butik) => res.json(butik))
    .catch((err) =>
      res.status(400).json({ message: "Error updating butik", error: err })
    );
};
