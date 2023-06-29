import React, { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = (props) => {
    const {id} = props;
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${id}`)
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
                    <li className="list-group-item">Hair Color:{apiData.hair_color}</li>
                    <li className="list-group-item">Eye Color: {apiData.eye_color}</li>
                    <li className="list-group-item">Gender: {apiData.gender}</li>
                    <li className="list-group-item">Height: {apiData.height}</li>
                    <Link to="/" className="btn btn-success">Back To Form</Link>
                </ul>
            </div>
        </div>
    )
};

export default People;