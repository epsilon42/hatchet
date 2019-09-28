import React from "react";
import "./LocationList.scss";
import Location from "./Location";
import { FaHeartBroken } from "react-icons/fa";

export const LocationList = props => {
  const { searchQuery, filteredLocations, toggleFavourite, favourites } = props;

  return (
    <div className="LocationList">
      {filteredLocations.filter(location =>
        location.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).length ? (
        filteredLocations
          .filter(location =>
            location.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
          )
          .map((location, index) => {
            return (
              <Location
                key={index}
                title={location.title}
                description={location.description}
                seats={location.seats}
                area={location.sqm}
                price={location.price_per_month}
                image={location.profile_image}
                toggleFavourite={toggleFavourite}
                favourites={favourites}
              />
            );
          })
      ) : (
        <div className="no-results">
          <span className="icon">
            <FaHeartBroken />
          </span>
          <span>
            There are no locations to display.
            <br />
            Try expanding your search criteria.
          </span>
        </div>
      )}
    </div>
  );
};

export default LocationList;
