import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Menu from "./Pages/Menu";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const [bookVisible, setBookVisible] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const showBook = () => {
    setBookVisible(true);

    setTimeout(() => {
      document.getElementById("book")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        showCart={showCart}
        setShowCart={setShowCart}
      />

     {!showCart ? (
  <>
    <section id="home">
      <Home showBook={showBook} />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="menu">
      <Menu setCartItems={setCartItems} />
    </section>

    {bookVisible && (
      <section id="book">
        <Book />
      </section>
    )}

    <section id="contact">
      <Contact />
    </section>
  </>
) : (
  <div className="container py-4">
  <div
    className="card shadow-lg border-0 mx-auto"
    style={{
      maxWidth: "800px",
      borderRadius: "15px",
    }}
  >
    <div className="card-header bg-dark text-white text-center">
      <h3 className="mb-0">🛒 My Cart</h3>
    </div>

    <div className="card-body">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h5 className="text-muted">Cart is Empty</h5>

          <button
            className="btn btn-secondary btn-sm mt-2"
            onClick={() => setShowCart(false)}
          >
            Back To Menu
          </button>
        </div>
      ) : (
        <>
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-top pt-3">
            <div className="d-flex justify-content-between">
              <h5>Grand Total</h5>

              <h4 className="text-success">
                ₹
                {cartItems.reduce(
                  (sum, item) =>
                    sum + item.price * item.qty,
                  0
                )}
              </h4>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-outline-secondary btn-sm flex-fill"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>

              <button
                className="btn btn-success btn-sm flex-fill"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
</div>
)}
    </>
  );
}

export default App;