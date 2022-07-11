import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-danger">
        <div className="container">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">UMKM</span>
            <Link
              to="/Admin"
              className="text-center"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-center"
              style={{
                paddingLeft: "20px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Halaman client
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
