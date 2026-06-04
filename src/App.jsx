import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Menu from "./Pages/Menu";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [showBookPage, setShowBookPage] = useState(false);

  const showBook = () => {
    setShowBookPage(true);
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        setShowCart={setShowCart}
      />

      {!showCart && !showBookPage ? (
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

          <section id="contact">
            <Contact />
          </section>
        </>
      ) : showBookPage ? (
        <Book setShowBookPage={setShowBookPage} />
      ) : (
        <div className="container py-5">
          <h1 className="text-center mb-4">
            🛒 My Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="alert alert-warning text-center">
              Cart is Empty
            </div>
          ) : (
            <>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Food</th>
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
                      <td>₹{item.qty * item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="card p-3">
                <h3>
                  Grand Total ₹
                  {cartItems.reduce(
                    (sum, item) =>
                      sum + item.price * item.qty,
                    0
                  )}
                </h3>

                <button className="btn btn-success mt-3">
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;