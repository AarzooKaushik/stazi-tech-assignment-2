import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Card from "../card/index";
import "./style.css";
const PropertyDetail = () => {
  const { id } = useParams();
  const property = data.find((p) => p.id === parseInt(id, 10));

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="property-details">
      <h2>Property Details</h2>
      <p>City : {property.city}</p>
      <Card property={property}></Card>
    </div>
  );
};

export default PropertyDetail;
