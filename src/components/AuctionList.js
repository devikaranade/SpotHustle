import React from "react";
import ParkingSpotCard from "./ParkingSpotCard";

const AuctionList = ({ spots, onBid }) => (
  <div className="auction-list">
    {spots.map((spot) => (
      <ParkingSpotCard key={spot.id} spot={spot} onBid={onBid} />
    ))}
  </div>
);

export default AuctionList;
