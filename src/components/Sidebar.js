import React from "react";
import "./Sidebar.scss";
import CustomRange from "./CustomRange";

class Sidebar extends React.Component {
  render() {
    const {
      updateFilter,
      applyFilter,
      seatsMin,
      seatsMax,
      // seatsMinLimit,
      seatsMaxLimit,
      areaMin,
      areaMax,
      // areaMinLimit,
      areaMaxLimit,
      priceMin,
      priceMax,
      // priceMinLimit,
      priceMaxLimit
    } = this.props;

    const updateFilterPrice = values => {
      updateFilter("price", values);
    };

    const updateFilterSeats = values => {
      updateFilter("seats", values);
    };

    const updateFilterArea = values => {
      updateFilter("area", values);
    };

    return (
      <div className="Sidebar">
        <div className="refine-your-search">
          <span>Refine your search</span>
        </div>

        <div className="filter-label">
          <span>Price Per Month</span>
        </div>
        {priceMin > -1 && (
          <CustomRange
            min={priceMin}
            max={priceMax}
            minLimit={0}
            maxLimit={priceMaxLimit}
            step={10}
            updateFilter={updateFilterPrice}
            prefix={"$"}
          />
        )}

        <div className="filter-label">
          <span>Seats</span>
        </div>
        {seatsMin > -1 && (
          <CustomRange
            min={seatsMin}
            max={seatsMax}
            minLimit={0}
            maxLimit={seatsMaxLimit}
            step={1}
            updateFilter={updateFilterSeats}
          />
        )}

        <div className="filter-label">
          <span>
            Floor Area (m<sup>2</sup>)
          </span>
        </div>
        {areaMin > -1 && (
          <CustomRange
            min={areaMin}
            max={areaMax}
            minLimit={0}
            maxLimit={areaMaxLimit}
            step={10}
            updateFilter={updateFilterArea}
          />
        )}

        <br />
        <button onClick={applyFilter}>Update Results</button>
      </div>
    );
  }
}

export default Sidebar;
