import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <ul className="nav-container nav justify-content-center">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#produk">
            Produk
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn-primary"
            to="/admin"
            aria-disabled="true"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default header;
