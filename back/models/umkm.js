const mongoose = require("mongoose");

const UMKM = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("umkms", UMKM);
