import React, { useState, useEffect } from "react";
import data from "../../data.json";
import Card from "../card/index";
import "./style.css";
const Properties = () => {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showAllProperties, setShowAllProperties] = useState(false);

  useEffect(() => {
    const filteredData = data.filter(
      (property) => property.city === selectedCity
    );
    setFilteredProperties(filteredData);
  }, [selectedCity]);

  const propertiesToShow = showAllProperties
    ? filteredProperties
    : filteredProperties.slice(0, 6);

  const toggleShowAllProperties = () => {
    setShowAllProperties(!showAllProperties);
  };

  return (
    <>
      <div>
        <div>
          <div className="flex">
            <div className="city-names">
              {["New York", "Mumbai", "Paris", "London"].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={selectedCity === city ? "primary-btn" : ""}
                >
                  {city}
                </button>
              ))}
            </div>
            <button className="secondary-btn">
              View All <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="properties">
            {propertiesToShow.map((property) => (
              <Card key={property.id} property={property}></Card>
            ))}
          </div>
        </div>
        <div className="footer">
          <button className="primary-btn" onClick={toggleShowAllProperties}>
            {showAllProperties ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Properties;
