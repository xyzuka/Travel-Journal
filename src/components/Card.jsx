import React from "react"

export default function Card(props) {
  const location = props.items.location;
  const locationCaps = location.toUpperCase();

    return (
      <div className="card">
        <img src={props.items.imageUrl} className="card-image" />
          <div className="card-header-section">
            <div className="location-section"> 
              <span><img src="/assets/location.png" className="location-tag"/></span>
              <span className="location-text">{locationCaps}</span>
              <a href={props.items.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="link-tag">View on Google Maps</a>
            </div>
            <h2 className="header-text">
              {props.items.title}
            </h2>
          <div className="card-description">
            <p className="date">
              Visited: {props.items.date}
            </p>
            <p className="location-description">
              {props.items.description}
            </p>
          </div>
          </div>
      </div>
    )
}