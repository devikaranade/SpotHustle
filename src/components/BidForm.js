import React, { useState } from "react";

const BidForm = ({ spotId, onSubmit }) => {
  const [bid, setBid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(spotId, bid);
    setBid("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
        placeholder="Enter your bid"
        required
      />
      <button type="submit">Submit Bid</button>
    </form>
  );
};

export default BidForm;
