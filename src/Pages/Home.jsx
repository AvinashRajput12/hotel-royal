function Home({ showBook }) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="overlay">
        <h1 className="display-3 fw-bold text-white">
          Welcome to Hotel Royal
        </h1>

        <p className="lead text-white">
          Luxury Rooms • Fine Dining • Premium Hospitality
        </p>

        <button
          className="book-btn"
          onClick={showBook}
        >
          Book Your Stay
        </button>
      </div>
    </div>
  );
}

export default Home;