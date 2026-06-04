function Book({ setShowBookPage }) {
  return (
    <div className="container py-4">
      <div
        className="card shadow-lg border-0 mx-auto"
        style={{
          maxWidth: "500px",
          borderRadius: "15px",
        }}
      >
        <div className="card-header bg-dark text-white text-center">
          <h3 className="mb-0">🏨 Book Your Stay</h3>
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
                Email
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
                Check-In Date
              </label>

              <input
                type="date"
                className="form-control form-control-sm"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Check-Out Date
              </label>

              <input
                type="date"
                className="form-control form-control-sm"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                Number of Guests
              </label>

              <input
                type="number"
                min="1"
                className="form-control form-control-sm"
                placeholder="Guests"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success btn-sm w-100"
            >
              Confirm Booking
            </button>
          </form>

          <button
            className="btn btn-outline-secondary btn-sm w-100 mt-2"
            onClick={() => setShowBookPage(false)}
          >
            ← Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;