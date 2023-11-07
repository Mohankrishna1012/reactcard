import { FaCheck, FaTimes } from "react-icons/fa";

function Card({ details }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {details.price}
          </h5>
          <h6 className="card-price text-center">
            {details.period}
            <span className="period">{details.month}</span>
          </h6>
          <hr />
          <ul>
            {details.features.map((feature) => {
              return (
                <li className={feature.enable ? "" : "text-muted"}>
                  {feature.enable ? (
                    <FaCheck className="fas fa-check" />
                  ) : (
                    <FaTimes className="fas fa-times" />
                  )}
                  &ensp; {feature.name}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
