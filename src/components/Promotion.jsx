import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const Promotion = () => {
  const promotions = [
    { id: 1, image: './images/promotion1.jpeg', title: 'Promo 1' },
    { id: 2, image: './images/promotion2.jpeg', title: 'Promo 2' },
    { id: 3, image: './images/promotion3.jpeg', title: 'Promo 3' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center display-4 mb-4 fw-bolder">Promotion</h2>
      <div className="row">
        {promotions.map((promo) => (
          <div key={promo.id} className="col-md-4">
            <div className="card mb-4">
              <img 
                src={promo.image} 
                className="card-img-top" 
                alt={promo.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{promo.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;