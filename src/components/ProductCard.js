import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wish" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/camera.jpg" className="img-fluid" alt="product" />
          <img src="images/headphone.jpg" className="img-fluid" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 packs multi coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">#100,000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="prod compare cart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view cart" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard