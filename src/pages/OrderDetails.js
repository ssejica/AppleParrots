import React from "react";
import "./OrderDetails.css";

function OrderDetails() {
  const orderNumber = ""; // State to store the order number entered by the user
  const orderStatus = "Pending"; // Example order status
  const orderItems = [
    { id: 1, name: "Item 1", quantity: 2 },
    // Add more items here...
  ];

  const handleSearch = () => {
    // Logic to handle search button click and retrieve order details
  };

  return (
    <div className="orderdetails">
      <h1 className="orderdetails-heading">Order Details</h1>
      <input
        type="text"
        placeholder="Enter Order Number"
        value={orderNumber}
        className="search-bar"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {orderNumber && (
        <>
          <p className="order-status">Order Status: {orderStatus}</p>
          <table className="order-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
