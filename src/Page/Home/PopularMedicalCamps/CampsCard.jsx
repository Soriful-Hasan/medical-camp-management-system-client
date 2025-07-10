import React from "react";
import { Link } from "react-router";

const CampsCard = ({ camp }) => {

  return (
    <div>
      <div className="card bg-base-100 w-full h-100 shadow-sm">
        <figure>
          <img src={camp.camp_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{camp.camp_name}</h2>
          <p>{camp.camp_description}</p>
          <div className="card-actions justify-end">
            <Link to={`/camp-details/${camp._id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampsCard;
