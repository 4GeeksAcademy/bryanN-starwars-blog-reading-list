import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPlanet = ({ planet }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/assets/img/planets/${planet.uid}.jpg`}
        className="card-img-top"
        alt={planet.name}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {planet.name}</h5>
        <Link to={`/planet/${planet.uid}`} className="btn btn-primary">Details</Link>
        <button className="btn btn-outline-warning ms-2">Fav</button>
      </div>
    </div>
  );
};

export default CardPlanet;