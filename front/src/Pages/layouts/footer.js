import React from "react";
import Instagram from "../../files/instagram.png";
import Facebook from "../../files/facebook.png";
import Whatsapp from "../../files/whatsapp.png";
const footer = () => {
  const copy = "\u00a9";
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(#e6e2d5,white)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div style={{ fontWeight: "bolder" }} className="mt-4 text-center">
              Bantuan
            </div>
            <div
              style={{
                display: "block",
                color: "black",
                width: "100%",
              }}
            >
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="mt-4 my-3"
              >
                <a
                  to="#"
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Home
                </a>
                <a
                  to="#about"
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Tentang
                </a>
                <a
                  to="#produk"
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Produk
                </a>
                <a
                  to="#"
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  Kontak Kami
                </a>
              </div>
            </div>
            <div className="text-center">Satriyo{copy}2022</div>
          </div>
          <div className="col-md-4">
            <div style={{ marginBottom: "2%" }}>
              <div className="text-center mt-4 my-3">
                <strong style={{ color: "#ffc64a", fontSize: "20px" }}>
                  Satriyo
                </strong>
                <div className="mt-4">
                  Berikut kontak atau social media kami, silahkan kunjungi kami
                  untuk mengetahui lebih lanjut
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-between",
                  }}
                >
                  <a href="#">
                    <img src={Instagram} width="50px" />
                  </a>
                  <a href="#">
                    <img src={Facebook} width="50px" />
                  </a>
                  <a href="#">
                    <img src={Whatsapp} width="50px" />
                  </a>
                </div>
              </div>
              <div className="text-center mt-3 my-4">
                Contact Suport : 081227578398
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div
              style={{ fontWeight: "bolder" }}
              className="mt-4 text-center my-4"
            >
              Pesan
            </div>
            <div>
              <form className="form-message">
                <fieldset className="form-group form-message-input">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Kirim pesan ..."
                  ></input>
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button
                    type="button"
                    className="btn btn-warning mt-2"
                    style={{ color: "white", float: "right" }}
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
