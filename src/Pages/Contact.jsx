function Contact() {
  return (
    <div className="contact-section">

      <div className="overlay">

        <h1 className="text-center text-white mb-4">
          Contact Us
        </h1>

        <form className="contact-form">

          <input type="text" placeholder="Name" className="form-control mb-3" />
          <input type="email" placeholder="Email" className="form-control mb-3" />
          <textarea placeholder="Message" className="form-control mb-3"></textarea>

          <button className="btn btn-warning w-100">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;