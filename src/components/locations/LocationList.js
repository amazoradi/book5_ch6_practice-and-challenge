import React, { Component } from "react"

class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
        <h2>Our Locations</h2>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}, {location.address}
            </div>
          )
        }
      </section>
    )
  }
}

export default LocationList