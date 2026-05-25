import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Collapse } from "bootstrap";

import Logo from "./ProductsImages/Logo.png";

function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const isActive = (path) => location.pathname === path;

  /* ✅ Mobile Navbar Close */
  const closeNavbar = () => {

    const navbar = document.getElementById("navbarNav");

    if (navbar && navbar.classList.contains("show")) {

      const bsCollapse = new Collapse(navbar, {
        toggle: false,
      });

      bsCollapse.hide();
    }
  };

  /* ✅ Search */
  const handleSearch = (e) => {

    e.preventDefault();

    const value = search.trim().toLowerCase();

    if (!value) {
      alert("Please enter something to search");
      return;
    }

    if (value.includes("home")) {
      navigate("/");
      setSearch("");
      closeNavbar();
      return;
    }

    if (value.includes("about")) {
      navigate("/about");
      setSearch("");
      closeNavbar();
      return;
    }

    if (
      value.includes("product") ||
      value.includes("homeopathy") ||
      value.includes("medicine") ||
      value.includes("herbal")
    ) {
      navigate("/products?search=" + value);
      setSearch("");
      closeNavbar();
      return;
    }

    alert("❌ No result found");
  };

  return (
    <>

      {/* ✅ NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

        <div className="container">

          {/* ✅ LOGO */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            onClick={closeNavbar}
          >

            <img
              src={Logo}
              alt="HerbAmrit Logo"
              className="me-2"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "18px",
                border: "3px solid #54a45b",
                padding: "4px",
                backgroundColor: "#fff",
                boxShadow: "0px 3px 12px rgba(0,0,0,0.12)"
              }}
            />

          </Link>

          {/* ✅ MOBILE TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>

          </button>

          {/* ✅ NAV LINKS */}
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* HOME */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  style={isActive("/") ? activeStyle : normalStyle}
                  to="/"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-house me-1"></i>
                  Home
                </Link>

              </li>

              {/* ABOUT */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  style={isActive("/about") ? activeStyle : normalStyle}
                  to="/about"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-circle-info me-1"></i>
                  About
                </Link>

              </li>

              {/* PRODUCTS */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  style={isActive("/products") ? activeStyle : normalStyle}
                  to="/products"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-bag-shopping me-1"></i>
                  Products
                </Link>

              </li>

              {/* CONTACT */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  style={isActive("/contact") ? activeStyle : normalStyle}
                  to="/contact"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-address-book me-1"></i>
                  Contact
                </Link>

              </li>

              {/* CART */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  style={isActive("/cart") ? activeStyle : normalStyle}
                  to="/cart"
                  onClick={closeNavbar}
                >
                  <i className="fa-solid fa-cart-shopping me-1"></i>
                  Cart
                </Link>

              </li>

              {/* SUPPORT */}
              <li className="nav-item mt-2 mt-lg-0">

                <button
                  className="btn btn-success ms-lg-2"
                  data-bs-toggle="modal"
                  data-bs-target="#supportModal"
                  onClick={closeNavbar}
                >
                  Support
                </button>

              </li>

            </ul>

            {/* ✅ SEARCH */}
            <form
              className="d-flex mt-3 mt-lg-0"
              onSubmit={handleSearch}
            >

              <input
                className="form-control me-2"
                type="search"
                placeholder="Search herbal products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>

            </form>

          </div>

        </div>

      </nav>

      {/* ✅ SUPPORT MODAL */}
      <div
        className="modal fade"
        id="supportModal"
        tabIndex="-1"
      >

        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">
                HerbAmrit Support
              </h5>

              <button
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <form>

                {/* NAME */}
                <div className="mb-3">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                  />

                </div>

                {/* EMAIL */}
                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                  />

                </div>

                {/* MESSAGE */}
                <div className="mb-3">

                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

/* ✅ ACTIVE LINK */
const activeStyle = {
  color: "#54a45b",
  fontWeight: "bold",
  borderBottom: "2px solid #54a45b"
};

/* ✅ NORMAL LINK */
const normalStyle = {
  color: "#000",
  fontWeight: "500"
};

export default Header;