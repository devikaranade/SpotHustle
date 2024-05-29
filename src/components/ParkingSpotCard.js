import React from "react";

const ParkingSpotCard = ({ spot, onBid }) => (
  <div className="card">
    <h2>{spot.location}</h2>
    <p>Current Bid: ${spot.currentBid}</p>
    <button onClick={() => onBid(spot.id)}>Place Bid</button>
  </div>
);

export default ParkingSpotCard;
