import { useState, useEffect } from "react";
import Fruit from "../files/fruit.jpg";
import Buah from "../files/buah.jpg";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import axios from "axios";
import "../style.css";

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
  return (
    <>
      <Header />
      <div className="fruit-container">
        <img src={Fruit} alt="fruit" className="fruit-banner" />
        <div className="row col-md-12">
          <div className="caption-homes col-md-6">
            <div className="caption-home container">Selamat berkunjung</div>
            <div className="caption-home2 container">
              Mari menjaga kondisi tubuh tetap sehat dengan konsumsi buah
            </div>
            <div className="caption-home3 container">
              Anda ingin sehat dengan memakan buah berkualitas?
              <br />
              Beli saja di toko kami
            </div>
            <a href="#produk" className="btn btn-success mt-2">
              Cari Produk
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="container">
        <p className="capt-text text-center mt-4">Tentang Kami</p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={Buah}
              className="img-profile img-fluid z-depth-1-half card shadow"
              alt=""
            />
          </div>
          <div className="col-md-6 mb-4 wrapper-about">
            <h3 className="h3 mb-3 text-center">Buah buahan</h3>
            <p style={{ textAlign: "justify" }} id="text-desc-about">
              Buah-buahan merupakan asupan vitamin dan mineral yang banyak.
              Beberapa nutrisi penting dari buah-buahan diantaranya folat,
              vitamin A, B, B1, B6, C, dan kalium. Kandungan vitamin dan mineral
              pada buah-buahan berbeda-beda. Namun, semuanya sama-sama
              memberikan nutrisi yang baik bagi tubuh. Sebagian vitamin dan
              mineral yang terkandung dalam buah juga mengandung antioksidan.
              Zat ini penting untuk melawan radikal bebas dan menjaga sistem
              daya tahan tubuh agar tetap prima.{" "}
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div id="produk" className="container">
        <p className="capt-text text-center mt-4">Produk</p>
        <div className="content-product row">
          {products.map((item, keys) => {
            return (
              <div className="card-product card shadow">
                <img
                  className="img-product"
                  src={`http://localhost:4000/images/${item.file}`}
                  alt="anggur"
                />
                <span className="text-center my-4">{item.nama}</span>
                <span> Berat : {item.harga}/kg</span>
                <span> Stok : {item.stock}</span>
                <a
                  href="http://wa.me/+6281227578398?text=Hai"
                  className="btn btn-success mt-4"
                >
                  Beli
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
