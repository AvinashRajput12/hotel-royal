function Navbar({ cartItems, setShowCart }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <a
          className="navbar-brand"
          href="#home"
          onClick={() => setShowCart(false)}
        >
          Hotel Royal
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <div className="navbar-nav ms-auto align-items-lg-center">

            <a
              className="nav-link"
              href="#home"
              onClick={() => setShowCart(false)}
            >
              Home
            </a>

            <a
              className="nav-link"
              href="#services"
              onClick={() => setShowCart(false)}
            >
              Services
            </a>

            <a
              className="nav-link"
              href="#menu"
              onClick={() => setShowCart(false)}
            >
              Menu
            </a>

            <a
              className="nav-link"
              href="#contact"
              onClick={() => setShowCart(false)}
            >
              Contact
            </a>

            <button
              className="btn btn-warning ms-lg-3 mt-2 mt-lg-0"
              onClick={() => setShowCart(true)}
            >
              🛒 Cart ({cartItems.length})
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;