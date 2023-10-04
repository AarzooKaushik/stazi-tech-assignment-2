import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <>
      <Link to={`/property/${property.id}`}>
        <div className="card-container">
          <div className="card-img">
            <img src={property.img} alt="" />
            <div className="rent-tag flex">
              <span>For Rent</span>{" "}
              <span>
                <i class="fa-solid fa-heart"></i>
              </span>
            </div>
          </div>

          <div className="card-detail">
            <h2>
              <i className="fa-solid fa-location-dot"></i> {property.location}
            </h2>
            <h1>{property.name}</h1>
            <div className="property-detail flex">
              <div>
                <i className="fa-solid fa-building"></i>
                <span>{property.room} room</span>
              </div>
              <div>
                <i className="fa-solid fa-bed"></i>
                <span>4 Bed</span>
              </div>
              <div>
                <i className="fa-solid fa-bath"></i>
                <span>1 Bath</span>
              </div>
              <div>
                <i className="fa-solid fa-arrows-up-down-left-right"></i>
                <span>{property.area} sft</span>
              </div>
            </div>
            <div className="card-footer flex">
              <div className="property-price">
                <span>${property.rent}</span>/month
              </div>
              <button className="secondary-btn">Read More</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
