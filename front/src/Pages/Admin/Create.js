import React, { useState } from "react";
import Head from "./Head";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [nama, setNama] = useState("");
  const [stock, setStock] = useState("");
  const [harga, setHarga] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [formDatas, setformDatas] = useState([]);

  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama", nama);
    formData.append("stock", stock);
    formData.append("harga", harga);

    try {
      const postData = await axios.post(
        "http://localhost:4000/data",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-type": "multipart/form-data",
          },
        }
      );
      setformDatas(postData);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Head />
      <div
        className="container col-md-6 card shadow"
        style={{ marginTop: "10%", padding: "20px" }}
      >
        <p className="text-center">Form tambah data</p>
        <form onSubmit={saveProducts}>
          <div className="form-group mt-4">
            <label>Nama</label>
            {formDatas}
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label>Stock</label>
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label>Harga</label>
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          {preview ? (
            <figure className="">
              <img src={preview} width={"300px"} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
          <div className="form-group mt-4">
            <label>Gambar</label>
            <input
              type={"file"}
              className="form-control"
              onChange={loadImage}
            />
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-success" type="submit">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
