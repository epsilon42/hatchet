import React from "react";
import "./Location.scss";
import { FaChair, FaLayerGroup, FaRegHeart, FaHeart } from "react-icons/fa";

export const Location = props => {
  const { title, description, seats, area, price, image, toggleFavourite, favourites } = props;

  return (
    <div className="Location">
      <a href="#/" className="inner" style={{ backgroundImage: `url(${image})` }}>
        <div className="favourite">
          {favourites.includes(title) ? (
            <FaHeart onClick={() => toggleFavourite(title)} />
          ) : (
            <FaRegHeart onClick={() => toggleFavourite(title)} />
          )}
        </div>
        <div className="caption">
          <span className="title">{title}</span>
          <div className="price">
            <span className="amount">${price}</span>
            <span className="per-month">/month</span>
          </div>
          <div>
            <span className="seats">
              <FaChair /> {seats}
            </span>
            <span className="area">
              <FaLayerGroup /> {area} m<sup>2</sup>
            </span>
          </div>
          <span className="description">{description}</span>
        </div>
      </a>
    </div>
  );
};

export default Location;
