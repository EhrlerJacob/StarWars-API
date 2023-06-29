import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Planets = (props) => {
    const {id} = props;
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {console.log(response.data);
        setApiData(response.data);
    })
        .catch((err)=> console.log(err));
    }, [props]);
    return (
        <div className="card" style={{width: "auto", marginTop: "10px"}}>
            <div className="card-body">
                <div className="card-title">Name: {apiData.name}</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Climate:{apiData.climate}</li>
                    <li className="list-group-item">Population: {apiData.population}</li>
                    <li className="list-group-item">Terrain: {apiData.terrain}</li>
                    <li className="list-group-item">Orbital Period: {apiData.orbital_period}</li>
                    <Link to="/" className="btn btn-success">Back To Form</Link>
                </ul>
            </div>
        </div>
    )
};
export default Planets;