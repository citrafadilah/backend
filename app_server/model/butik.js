const mongoose = require("mongoose");

const butikSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  harga: { type: String, required: true },
  kategori_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kategori',
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Butik", butikSchema);
