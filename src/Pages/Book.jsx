import { useState } from "react";

function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, address } = formData;

    if (name === "" || email === "" || contact === "" || address === "") {
      setMessage("⚠️ Please fill all fields!");
      return;
    }

    setMessage("🎉 Booking Successfully Done!");

    setFormData({
      name: "",
      email: "",
      contact: "",
      address: "",
    });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="booking-card">

        <h2 className="text-center mb-3">Book Your Stay</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="number"
            name="contact"
            className="form-control mb-3"
            placeholder="Enter Contact"
            value={formData.contact}
            onChange={handleChange}
          />

          <textarea
            name="address"
            className="form-control mb-3"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          <button className="btn btn-success w-50 d-block mx-auto">
            Confirm Booking
          </button>

        </form>

        {/* MESSAGE */}
        <p className={message.includes("Successfully") ? "success" : "warning"}>
        {message}
        </p>

      </div>
    </div>
  );
}

export default Book;