import { useState } from "react";

function Menu({ setCartItems }) {
  const [cart, setCart] = useState({});

  const menuItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 280,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    },
    {
      id: 2,
      name: "Shahi Paneer",
      price: 300,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    },
    {
      id: 3,
      name: "Veg Biryani",
      price: 280,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    },
    {
      id: 4,
      name: "Butter Chicken",
      price: 420,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    },
    {
      id: 5,
      name: "Chicken Tikka",
      price: 350,
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600",
    },
    {
      id: 6,
      name: "Dal Makhani",
      price: 220,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    },
    {
      id: 7,
      name: "Paneer Tikka",
      price: 280,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    },
    {
      id: 8,
      name: "Fried Rice",
      price: 180,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    },
    {
      id: 9,
      name: "Hakka Noodles",
      price: 190,
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600",
    },
    {
      id: 10,
      name: "Veg Manchurian",
      price: 210,
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
    },
    {
      id: 11,
      name: "Spring Roll",
      price: 160,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600",
    },
    {
      id: 12,
      name: "Garlic Naan",
      price: 60,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",
    },
    {
      id: 13,
      name: "Butter Naan",
      price: 50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    },
    {
      id: 14,
      name: "Jeera Rice",
      price: 140,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    },
    {
      id: 15,
      name: "Mutton Curry",
      price: 450,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    },
    {
      id: 16,
      name: "Fish Curry",
      price: 420,
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600",
    },
    {
      id: 17,
      name: "Cold Coffee",
      price: 120,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    },
    {
      id: 18,
      name: "Chocolate Cake",
      price: 180,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },
    {
      id: 19,
      name: "Gulab Jamun",
      price: 90,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    },
    {
      id: 20,
      name: "Ice Cream",
      price: 100,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    },
  ];

  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const totalItems = Object.values(cart).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const handleAddToCart = () => {
    const selectedItems = menuItems
      .filter((item) => (cart[item.id] || 0) > 0)
      .map((item) => ({
        ...item,
        qty: cart[item.id],
      }));

    setCartItems(selectedItems);
    setCart({});

    alert("Items Added To Cart");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Menu</h2>

      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">

              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5>{item.name}</h5>

                <h6 className="text-success">
                  ₹{item.price}
                </h6>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-3">

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span className="fs-5 fw-bold">
                    {cart[item.id] || 0}
                  </span>

                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleAddToCart}
        >
          Add To Cart ({totalItems})
        </button>
      </div>
    </div>
  );
}

export default Menu;