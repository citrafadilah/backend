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
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    dueDate: req.body.dueDate,
    user: req.body.user,
    category: req.body.category,
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
  const { title, description, dueDate, category, completed } = req.body;

  const newButik = new Butik({
    title,
    description,
    dueDate,
    category,
    completed: completed || false,
    user: req.userId,
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
