import React, { useState, useEffect } from "react";
import Head from "./Head";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [nama, setNama] = useState("");
  const [stock, setStock] = useState("");
  const [harga, setHarga] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [formDatas, setformDatas] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:4000/data/${id}`);
    setNama(response.data.nama);
    setStock(response.data.stock);
    setHarga(response.data.harga);
    setFile(response.data.file);
    setPreview(response.data.file);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama", nama);
    formData.append("stock", stock);
    formData.append("harga", harga);

    try {
      await axios.patch(`http://localhost:4000/data/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
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
        <p className="text-center">Form edit data</p>
        <form onSubmit={updateProducts}>
          <div className="form-group mt-4">
            <label>Nama</label>
            {formDatas}
            <input
              type={"text"}
              className="form-control"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label>Stock</label>
            <input
              type={"text"}
              value={stock}
              className="form-control"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label>Harga</label>
            <input
              type={"text"}
              value={harga}
              className="form-control"
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          {preview ? (
            <figure className="">
              <img src={file} width={"300px"} alt="Preview Image" />
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
