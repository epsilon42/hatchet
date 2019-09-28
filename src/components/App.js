import React from "react";
import "./App.scss";
import ApiResponse from "../api/ApiResponse";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LocationList from "./LocationList";
require("@openfonts/dosis_all");

class App extends React.Component {
  state = {
    allLocations: [],
    filteredLocations: [],
    seatsMin: "",
    seatsMax: "",
    areaMin: "",
    areaMax: "",
    priceMin: "",
    priceMax: "",
    searchQuery: "",
    favourites: []
  };

  componentDidMount() {
    this.setState(
      {
        allLocations: ApiResponse
      },
      () => {
        this.setState({
          filteredLocations: this.state.allLocations,

          // Seats
          seatsMin: 0,
          seatsMax: Math.max(...this.state.allLocations.map(p => p.seats)),
          seatsMinLimit: 0,
          seatsMaxLimit: Math.max(...this.state.allLocations.map(p => p.seats)),

          // Area
          areaMin: 0,
          areaMax: Math.max(...this.state.allLocations.map(p => p.sqm)),
          areaMinLimit: 0,
          areaMaxLimit: Math.max(...this.state.allLocations.map(p => p.sqm)),

          // Price
          priceMin: 0,
          priceMax: Math.max(...this.state.allLocations.map(p => p.price_per_month)),
          priceMinLimit: 0,
          priceMaxLimit: Math.max(...this.state.allLocations.map(p => p.price_per_month))
        });
      }
    );
  }

  updateFilterSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFilter = (propName, values) => {
    const min = `${propName}Min`;
    const max = `${propName}Max`;
    this.setState({
      [min]: values[0],
      [max]: values[1]
    });
  };

  applyFilter = e => {
    const { allLocations, seatsMin, seatsMax, areaMin, areaMax, priceMin, priceMax } = this.state;
    e.preventDefault();
    this.setState({
      filteredLocations: allLocations.filter(
        location =>
          location.seats >= seatsMin &&
          location.seats <= seatsMax &&
          location.sqm >= areaMin &&
          location.sqm <= areaMax &&
          location.price_per_month >= priceMin &&
          location.price_per_month <= priceMax
      )
    });
  };

  toggleFavourite = location => {
    this.state.favourites.includes(location)
      ? this.setState({ favourites: this.state.favourites.filter(fav => fav !== location) })
      : this.setState({ favourites: [...this.state.favourites, location] });
  };

  render() {
    const {
      filteredLocations,
      seatsMin,
      seatsMax,
      seatsMinLimit,
      seatsMaxLimit,
      areaMin,
      areaMax,
      areaMinLimit,
      areaMaxLimit,
      priceMin,
      priceMax,
      priceMinLimit,
      priceMaxLimit,
      searchQuery,
      favourites
    } = this.state;
    return (
      <div className="App">
        <Header updateFilterSearch={this.updateFilterSearch} searchQuery={searchQuery} />
        <main>
          <Sidebar
            updateFilter={this.updateFilter}
            applyFilter={this.applyFilter}
            seatsMin={seatsMin}
            seatsMax={seatsMax}
            seatsMinLimit={seatsMinLimit}
            seatsMaxLimit={seatsMaxLimit}
            areaMin={areaMin}
            areaMax={areaMax}
            areaMinLimit={areaMinLimit}
            areaMaxLimit={areaMaxLimit}
            priceMin={priceMin}
            priceMax={priceMax}
            priceMinLimit={priceMinLimit}
            priceMaxLimit={priceMaxLimit}
          />
          <LocationList
            searchQuery={searchQuery}
            toggleFavourite={this.toggleFavourite}
            favourites={favourites}
            filteredLocations={filteredLocations}
          />
        </main>
      </div>
    );
  }
}

export default App;
