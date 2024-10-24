import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS if needed

const Customer = ({ customers, setCustomers }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length >= 2 && /\S+@\S+\.\S+/.test(form.email)) {
      setCustomers([...customers, form]);
      setForm({ name: '', email: '', phoneNumber: '', address: '' });
    } else {
      alert("Please fill in valid customer details.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="email" className="form-control" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Phone Number" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Customer</button>
      </form>

      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber || 'N/A'}</td>
              <td>{customer.address || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Customer;
