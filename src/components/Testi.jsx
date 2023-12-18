import React from 'react';
import "./css/testi.css";

const Testi = ({ title, stars, customerName, materialDescription, photo }) => {
  return (
    <>
      <div className="testi-section" data-aos="flip-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className="card-container p-3 mt-5 mt-md-0">
      <div className="photo-container">
        <img src={photo} alt="" className="w-100 img-fluid" />
      </div>
      <div className="first-description text-start mt-3">
        <p className="product-name mb-0 fs-6 text-capitalize">{title}</p>
        <div className="star d-flex mt-1">
          {[...Array(stars).keys()].map((star) => (
            <img key={star} src="../assets/testi/star-kuning.svg" alt="" className="me-2" />
          ))}
          {[...Array(5 - stars).keys()].map((star) => (
            <img key={star} src="../assets/testi/star-abu.svg" alt="" />
          ))}
        </div>
        <p className="customer-name fs-6 mt-1">by {customerName}</p>
      </div>
      <div className="second-description text-start fs-6 mt-4">
        <p className="fw-semibold">{materialDescription}</p>
      </div>
        </div>
            </div>
            
          {/* </div>
        </div>
        </div> */}
      </>
  );
};

export default Testi;
