import React from "react";
import "./Shop.css";
import item1 from "./images/item1.jpg";

function Shop() {
  const items = [
    {
      id: 1,
      name: "Item 1",
      image: "item1.jpg",
      description: "Description of Item 1",
    },
    // Add more items here...
  ];

  return (
    <div className="shop">
      <h1 className="shop-heading">Shop</h1>
      <select className="sort-by">
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="cart-button">View Cart</button>

      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item1} alt="Item1" />
          <h2 className="Item1">{item1}</h2>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
