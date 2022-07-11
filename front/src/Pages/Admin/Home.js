import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const Product = await axios.get("http://localhost:4000/data");
      setProducts(Product.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/data/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head />
      <div style={{ marginTop: "4%", padding: "20px", textAlign: "center" }}>
        <p className="text-center">Tabel Produk</p>
        <div className="container">
          <Link
            to={"create"}
            className="btn btn-success"
            style={{ float: "left" }}
          >
            Tambah
          </Link>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Stock</th>
                <th>Harga</th>
                <th>Gambar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, keys) => {
                return (
                  <tr key={item._id}>
                    <th>{keys + 1}</th>
                    <th>{item.nama}</th>
                    <th>{item.stock}</th>
                    <th>{item.harga}</th>
                    <th>
                      <img
                        src={`http://localhost:4000/images/${item.file}`}
                        width={"100px"}
                        alt="gambar"
                      />
                    </th>
                    <th>
                      <Link
                        to={`edit/${item._id}`}
                        className="btn btn-warning"
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProduct(item._id)}
                        className="btn btn-danger"
                      >
                        Hapus
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
