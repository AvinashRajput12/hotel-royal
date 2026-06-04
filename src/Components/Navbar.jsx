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

        <div className="navbar-nav ms-auto d-flex align-items-center">
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
            className="btn btn-warning ms-3"
            onClick={() => setShowCart(true)}
          >
            🛒 Cart ({cartItems.length})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;