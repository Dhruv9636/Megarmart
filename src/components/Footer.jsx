import React from 'react'

const Footer = () => {
  return (
        <footer className="footer-container">
  <div className="footer-content">
    
    {/* <!-- Column 1: Brand & Contact Info --> */}
    <div className="footer-column brand-section">
      <h1 className="brand-logo">MegaMart</h1>
      
      <div className="contact-group">
        <h3>Contact Us</h3>
        <div className="contact-item">
          <span className="contact-icon">💬</span>
          <div className="contact-text">
            <span className="contact-label">WhatsApp</span>
            <a href="tel:+12029182132" className="contact-link">+1 202-918-2132</a>
          </div>
        </div>
        
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <div className="contact-text">
            <span className="contact-label">Call Us</span>
            <a href="tel:+12029182132" className="contact-link">+1 202-918-2132</a>
          </div>
        </div>
      </div>

      <div className="download-section">
        <h3>Download App</h3>
        <div className="app-buttons">
          {/* <!-- App Store Button --> */}
          <a href="#" className="app-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLVFsqDG_iNY0zJOd2nMcqBvpZeFU9G07OVka_3DCOQ&s=10" alt="Download on the Appstore" />
            
          </a>
           {/* Google Play Button  */}
          <a href="#" className="app-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbjOJI-W5UqJi4Nqru2HDAFysCYNwk0JnjzgPeRgHxw&s=10" alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </div>

     {/* Column 2: Most Popular Categories  */}
    <div className="footer-column">
      <h3>Most Popular Categories</h3>
      <ul className="footer-links">
        <li><a href="#">Staples</a></li>
        <li><a href="#">Beverages</a></li>
        <li><a href="#">Personal Care</a></li>
        <li><a href="#">Home Care</a></li>
        <li><a href="#">Baby Care</a></li>
        <li><a href="#">Vegetables & Fruits</a></li>
        <li><a href="#">Snacks & Foods</a></li>
        <li><a href="#">Dairy & Bakery</a></li>
      </ul>
    </div>

     {/* Column 3: Customer Services  */}
    <div className="footer-column">
      <h3>Customer Services</h3>
      <ul className="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">E-waste Policy</a></li>
        <li><a href="#">Cancellation & Return Policy</a></li>
      </ul>
    </div>

  </div>

 
  <div className="footer-bottom">
    <p>© 2026 All rights reserved. Reliance Retail Ltd.</p>
  </div>
</footer>

    
  )
}

export default Footer