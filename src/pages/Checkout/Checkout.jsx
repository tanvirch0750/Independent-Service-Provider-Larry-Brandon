import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const params = useParams();
  return (
    <div>
      <h1>This is chekout page. {params.id}</h1>
    </div>
  );
};

export default Checkout;
