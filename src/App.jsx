import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Customer from './components/Customer';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Promotion from './components/Promotion';

function App() {
  const [customers, setCustomers] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Main Container */}
      <div className="mt-5">
      <section id="promotion" className="mb-5">
            <div className="col-md-8 offset-md-2">
            <Promotion />
            </div>
      </section>
        
        {/* Menu Section */}
        <section id="menu" className="mb-5">
          <h2 className="text-center display-4 mb-4">Menu</h2>
          <div className="row">
            <div className="col-md-8 offset-md-2">
            <Menu menuItems={menuItems} setMenuItems={setMenuItems} />
            </div>
          </div>
        </section>

        <hr />

        {/* Customer Section */}
        <section id="customer" className="mb-5">
          <h2 className="text-center display-4 mb-4">Customers</h2>
          <div className="row">
            <div className="col-md-8 offset-md-2">
            <Customer customers={customers} setCustomers={setCustomers} />
            </div>
          </div>
        </section>

        <hr />

        {/* Order Section */}
        <section id="order" className="mb-5">
          <h2 className="text-center display-4 mb-4">Orders</h2>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card p-4">
              <Order customers={customers} menuItems={menuItems} />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer Section */}
      <section id="contact" className="mb-5">
        <Footer />
      </section>
    </div>
  );
}

export default App;
