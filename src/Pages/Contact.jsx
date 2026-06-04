function Contact() {
  return (
    <div className="container py-4">
      <div
        className="card shadow-lg border-0 mx-auto"
        style={{
          maxWidth: "550px",
          borderRadius: "15px",
        }}
      >
        <div className="card-header bg-dark text-white text-center">
          <h3 className="mb-0">📞 Contact Us</h3>
        </div>

        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">
                Full Name
              </label>

              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Mobile Number
              </label>

              <input
                type="tel"
                className="form-control form-control-sm"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Message
              </label>

              <textarea
                rows="4"
                className="form-control form-control-sm"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-warning btn-sm w-100"
            >
              Send Message
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="mb-1">
              📍 Hotel Royal, Main Road, New Delhi
            </p>

            <p className="mb-1">
              📞 +91 9876543210
            </p>

            <p className="mb-0">
              ✉️ info@hotelroyal.com
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />

    <div className="row text-center">

      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">Support</h6>

        <a href="#contact" className="d-block text-decoration-none">
          Contact Support
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Live Chat
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Report Issue
        </a>
      </div>

      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">Help Center</h6>

        <a href="#contact" className="d-block text-decoration-none">
          FAQs
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Booking Help
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Cancellation Policy
        </a>
      </div>

      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">Community</h6>

        <a href="#contact" className="d-block text-decoration-none">
          Customer Reviews
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Travel Blog
        </a>

        <a href="#contact" className="d-block text-decoration-none">
          Events
        </a>
      </div>

      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">About Us</h6>

        <a href="#about" className="d-block text-decoration-none">
          Company Info
        </a>

        <a href="#about" className="d-block text-decoration-none">
          Privacy Policy
        </a>

        <a href="#about" className="d-block text-decoration-none">
          Terms & Conditions
        </a>
      </div>

    </div>

    <hr />

    <div className="text-center text-muted">
      © 2025 Hotel Royal. All Rights Reserved.
    </div>      
    </div>
  );
}

export default Contact;