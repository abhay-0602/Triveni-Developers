import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./triveni.jpeg" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">No.807, Gold Crest Business Center, L.T. Road, Borivali West, Mumbai-400092.</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services  </span>
            <span>Product</span>
            <span>About Us</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
