import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/works.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="d-flex flex-column align-items-center">
        <div className="spinner-grow" style={{ width: "100px", height: "100px", backgroundColor: "#ff8c00" }} role="status">
          {/* <span className="visually-hidden">Loading...</span> */}
        </div>
        {/* <p className="mt-3">Loading, please wait...</p> */}
      </div>
    </div>
  );
}
