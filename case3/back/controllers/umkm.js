const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const UMKM = require("../models/umkm");
require("dotenv").config();

const getView = async (req, res) => {
  try {
    res.set("Content-Type", "application/json");
    const getUmkm = await UMKM.find({});
    res.json(getUmkm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await UMKM.findOne({
      _id: req.params.id,
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const saveProduct = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.nama;
  const stock = req.body.stock;
  const harga = req.body.harga;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await UMKM.create({
        nama: name,
        stock: stock,
        harga: harga,
        file: url,
      });
      res.status(201).json({ msg: "Product Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};
const updateProduct = async (req, res) => {
  const product = await UMKM.findOne({
    where: {
      _id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null || req.files === undefined) {
    fileName = product.file;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${product.file}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const nama = req.body.nama;
  const stock = req.body.stock;
  const harga = req.body.harga;
  const url = `${fileName}`;

  try {
    await UMKM.updateOne(
      {
        _id: req.params.id,
      },
      { nama: nama, stock: stock, harga: harga, file: url }
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {});
    res.status(200).json({ msg: "Product Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProduct = async (req, res) => {
  const product = await UMKM.findOne({
    _id: req.params.id,
  });
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  console.log(product.file);
  try {
    const filepath = `./public/images/${product.file}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    await UMKM.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({ msg: "Product Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  getView,
  saveProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
