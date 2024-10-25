import React, { useState } from 'react';

const Order = ({ customers, menuItems }) => {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (!selectedCustomer || selectedMenuItems.length === 0) {
      alert('Please select a customer and at least one menu item.');
      return;
    }

    const totalPrice = selectedMenuItems.reduce((sum, item) => sum + item.price, 0);

    // Add new order to the orders list
    setOrders([...orders, {
      customer: selectedCustomer,
      menuItems: selectedMenuItems,
      totalPrice,
    }]);

    // Reset form after submission
    setSelectedCustomer('');
    setSelectedMenuItems([]);
  };

  const handleMenuItemChange = (menuItem, isChecked) => {
    if (isChecked) {
      setSelectedMenuItems((prev) => [...prev, menuItem]);
    } else {
      setSelectedMenuItems((prev) =>
        prev.filter((item) => item.name !== menuItem.name)
      );
    }
  };

  return (
    <div className="mt-4">
      <h2>Create Order</h2>
  
      <form onSubmit={handleOrderSubmit}>
        <div className="form-group">
          <label>Select Customer</label>
          <select 
            className="form-control" 
            value={selectedCustomer} 
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="">--Select Customer--</option>
            {customers.length > 0 ? customers.map((customer, index) => (
              <option key={index} value={customer.name}>
                {customer.name} ({customer.email})
              </option>
            )) : <option value="">No customers available</option>}
          </select>
        </div>
  
        <div className="form-group mt-3">
          <label>Select Menu Items</label>
          {menuItems.length > 0 ? menuItems.map((menuItem, index) => (
            <div key={index} className="d-flex align-items-center">
              <div className="form-check me-3">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  value={menuItem.name}
                  checked={selectedMenuItems.some(item => item.name === menuItem.name)}
                  onChange={(e) => handleMenuItemChange(menuItem, e.target.checked)}
                />
                <label className="form-check-label">
                  {menuItem.name} - Rp.{menuItem.price}
                </label>
              </div>
              {selectedMenuItems.some(item => item.name === menuItem.name) && (
                <input
                  type="number"
                  className="form-control ms-3"
                  style={{ width: '100px' }}
                  min="1"
                  value={selectedMenuItems.find(item => item.name === menuItem.name)?.quantity || 1}
                  onChange={(e) => handleQuantityChange(menuItem, e.target.value)}
                  placeholder="Quantity"
                />
              )}
            </div>
          )) : <p>No menu items available</p>}
        </div>
  
        <button type="submit" className="btn btn-success mt-3">Submit Order</button>
      </form>
  
      <div className="mt-5 table-responsive">
        <h3>Submitted Orders</h3>
        {orders.length > 0 ? (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Menu Items</th>
                <th>Total Price (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.customer}</td>
                  <td>
                    {order.menuItems.map((item, idx) => (
                      <span key={idx}>
                        {item.name} (x{item.quantity})
                        {idx < order.menuItems.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </td>
                  <td>{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Order;