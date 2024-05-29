import React, { useState } from "react";
import Header from "./components/Header";
import AuctionList from "./components/AuctionList";
import BidForm from "./components/BidForm";
import Footer from "./components/Footer";
import "./App.css";

const initialSpots = [
  { id: 1, location: "123 Main St", currentBid: 10 },
  { id: 2, location: "456 Elm St", currentBid: 15 },
  { id: 3, location: "789 Oak St", currentBid: 20 },
];

function App() {
  const [spots, setSpots] = useState(initialSpots);
  const [currentSpotId, setCurrentSpotId] = useState(null);

  const handleBid = (spotId) => {
    setCurrentSpotId(spotId);
  };

  const handleBidSubmit = (spotId, bid) => {
    setSpots((prevSpots) =>
      prevSpots.map((spot) =>
        spot.id === spotId ? { ...spot, currentBid: bid } : spot
      )
    );
    setCurrentSpotId(null);
  };

  return (
    <div className="App">
      <Header />
      <AuctionList spots={spots} onBid={handleBid} />
      {currentSpotId && (
        <BidForm spotId={currentSpotId} onSubmit={handleBidSubmit} />
      )}
      <Footer />
    </div>
  );
}

export default App;
