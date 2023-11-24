import React from 'react';
import {Link} from 'react-router-dom'
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up For NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Email Address.."
                  aria-label="Enter Email Address.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Ilaje, Bariga, <br /> Lagos <br />
                  Post Code: 10001
                </address>
                <a
                  href="tel: +2348127586313"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +234 8127586313
                </a>
                <a
                  href="mailto:juliuseli2004@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  juliuseli2004@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    className="text-white"
                    href="https://www.linkedin.com/in/julius-elizabeth-b736a1173/"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://github.com/Itohaneliza"
                  >
                    <BsGithub className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/juliusliz_/"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/profile.php?id=100081277358047"
                  >
                    <BsFacebook className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Delivery Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Time Pieces</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by SiSi Codes
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer