import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <section className="footer-section padding-100">
        <div className="container row">
          <div className="first-column col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="w-100">
              <img src="image/black-logo.png" alt="" />
                <p>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit, auctor nam elit nulla.</p>
                <div className="apps">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-facebook-messenger"></i>
                  <i className="fa-brands fa-github"></i>
                </div>
            </div>
          </div>
          <div className="second-column col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <div className="w-100">
              <ul>
                <h2>Company</h2>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Core Services</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>
          </div>
          <div className="third-column col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="w-100">
              <ul>
                <h2>Support</h2>
                <li><a href="#">Services</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="fourth-column col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="w-100">
              <ul>
                <h2>Useful Links</h2>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">How It Works?</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="fifth-column col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="w-100">
              <h2>Newsletter</h2>
              <p>Best solution for your it startup business, consecteturadipiscing elit.</p>
              <form>
                <div className="row">
                  <input type="email" placeholder="Your Email" />
                    <a href="#"><span className="material-symbols-outlined">send</span></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    <footer class="footer">
        <div class="container text-center">
            <p>Copyright 2022 <span class="bold">Pakap</span> .All Rights Reserved by <span class="pink">YashGuard</span></p>
        </div>
    </footer>
    </>
  )
}

export default Footer