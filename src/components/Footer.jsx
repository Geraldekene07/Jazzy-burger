import React from "react";
import vec from "../assets/landing page for desktop/Vector (2).png";

const Footer = () => {
  return (
    <div className="foot-main d-flex">
      <div className="foot-body d-flex">
        <img className="vec1" src={vec} alt="" />
        <h5 className="active">24/7</h5> <br />
        <h5 className="active">Support</h5>
      </div>
    </div>
  );
};

export default Footer;
