import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-0">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-warning">HerbAmrit</h4>
            <p>
              Pure aur trusted homeopathy products ke liye HerbAmrit aapka bharosemand partner hai.  
Hum aap tak natural care, quality medicines aur healthy wellness solutions lekar aate hain.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Contact Us</h5>
            <p className="mb-1">📍 Hisar, Haryana</p>
            <a style={{ color: "white", textDecoration: "none" }} href="tel:+917056523602">
              <p className="mb-1">📞 +91 7056523602</p>
            </a>
            <a style={{color: "white", textDecoration: "none"}} href="mailto:murrahgold@gmail.com?Subject=Inquiry">
              <p className="mb-1">📧 herbAmrit@gmail.com</p>
            </a>

            {/* Social Media (Simple & Working) */}
            <div className="mt-3">
              <a href="#" className="text-light me-3">👍 Facebook</a>
              <a href="#" className="text-light me-3">📸 Instagram</a>
              <a href="#" className="text-light me-3">🐦 Twitter</a>
              <a href="#" className="text-light">💬 WhatsApp</a>
            </div>

          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} HarbAmrit. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;