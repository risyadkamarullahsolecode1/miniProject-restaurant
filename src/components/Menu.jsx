import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS if needed

const Menu = ({ menuItems, setMenuItems }) => {
  const [form, setForm] = useState({
    name: '',
    price: 0,
    category: 'Food',
    rating: 0,
    isAvailable: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length >= 2 && form.price > 0 ) {
      setMenuItems([...menuItems, form]);
      setForm({ name: '', price: 0, category: 'Food', rating: 0, isAvailable: true });
    } else {
      alert("Please fill in valid menu details.");
    }
  };

  return (
    <div className="container-fluid mt-2">
      <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3 fw-bolder">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Name" 
          value={form.name} 
          onChange={(e) => setForm({ ...form, name: e.target.value })} 
          required 
          max="200"
        />
      </div>

      <div className="mb-3 fw-bolder">
        <label className="form-label">Price</label>
        <input 
          type="number" 
          className="form-control" 
          placeholder="Price" 
          value={form.price} 
          onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} 
          required 
          min="0"
        />
      </div>

      <div className="mb-3 fw-bolder">
        <label className="form-label">Category</label>
        <select 
          className="form-select" 
          value={form.category} 
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="Food">Food</option>
          <option value="Beverage">Beverage</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bolder">Rating</label>
        <input 
          type="number" 
          className="form-control" 
          placeholder="Rating" 
          value={form.rating} 
          onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) })} 
          min="0" 
          max="5" 
        />
      </div>

      <div className="mb-3 fw-bolder">
        <div className="form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            checked={form.isAvailable} 
            onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })} 
          />
          <label className="form-check-label">Available</label>
        </div>
      </div>

      <div className="text-center mt-2">
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
      </form>

      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>Rp. {item.price}</td>
              <td>{item.category}</td>
              <td>{item.rating}</td>
              <td>{item.isAvailable ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Menu;