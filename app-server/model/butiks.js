const mongoose = require("mongoose");

const butikSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  harga: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Butik", butikSchema);
