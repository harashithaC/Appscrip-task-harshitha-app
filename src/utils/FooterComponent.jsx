import React from 'react';
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="top-footer">
      <div className="newsletter">
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettà muse.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="contact-currency">
        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className="currency">
          <h4>CURRENCY</h4>
          <p>
            <img src="https://flagcdn.com/us.svg" width="18" alt="US" style={{ marginRight: '6px' }} />
            USD
          </p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>
    </div>
      <hr />

      <div className="footer-bottom">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>mettà muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-column social-pay">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <img src="insta1.png" alt="Instagram" width="22" color='white'/>
              <img src="images.png" alt="LinkedIn" width="22" />
            </div>
            <h4 style={{ marginTop: '1.2em' }}>mettà muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
            </div>
          </div>
        </div>
      </div>

      <p className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
