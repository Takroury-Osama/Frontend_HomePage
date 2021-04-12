import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook,Twitter, Instagram, YouTube } from '@material-ui/icons/';



function Footer() {
  return (
    <>
      <section className="section-content bg-white mt-4 py-3">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <p className="footer-title"> Follow us on </p>
            <div className="social-group">
            <span className="social-icon"><Facebook fontSize="large"/></span>
            <span className="social-icon"><Twitter fontSize="large"/></span>
            <span className="social-icon"><Instagram fontSize="large"/></span>
            <span className="social-icon"><YouTube fontSize="large"/></span>
            </div>
            <p className="footer-title pt-4"> Get app exclusive deals </p>
            <button className="btn btn-info mt-1">Download Our App</button>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <p className="footer-title"> GrabOne</p>
                <nav className="footer-list">
                  <ul>
                  <li><a href="#">GrabOne Gar</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Gift Card</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-md-4">
                <p className="footer-title"> My Account </p>
                <nav className="footer-list">
                  <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Cart</a></li>
                    <li><a href="#">osama Tak</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-md-12">
                <p className="footer-title"> Merchants </p>
                <nav className="footer-list">
                  <ul>
                    <li><a href="#">Run a Deal</a></li>
                    <li><a href="#">Merchant Centre</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-12">
            <p className="footer-title">Newsletter Signup</p>
            <h6 className="font-weight-light my-3">Sign up for our daily emails and we'll send you all the best deals, tailored for you.</h6>
            <div>
            <form action="mailto:osama.tak.96@gmail.com" method="get" enctype="text/plain">
              <input type="email" className="email-input" name="email" placeholder="Enter Email"/>
              <button type="submit" className="btn btn-info">Let's Keep In Touch</button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
