import React from "react";
import "../styles/Footers.css";
import logo from "../assets/LogoFooter.svg";

function Foot() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img className="footimg" src={logo} alt="" />
              </div>
              <div className="col-md-4 d-flex justify-content-around">
                <h5>About</h5>
                <h5>Contact</h5>
                <h5>Privacy Policy</h5>
              </div>

              <div className="col-md-4 social-links d-flex justify-content-around ps-5">
                <a href="https://twitter.com/developerpolka1">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foot;
