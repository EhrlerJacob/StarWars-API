import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";

const Form = ({category, setCategory, id, setId}) => {
    
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    };
    return (
        <form style={{paddingTop: "10px"}} 
        onSubmit={handleSubmit}
        className="form-control">
            Search For:{" "}
        <select className="form-select" 
        onChange={(e) => setCategory(e.target.value)}>
            <option value="">-----</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        ID: <input type="number" 
        onChange={(e) => setId(e.target.value)}
        className="form-control" />
        <button className="btn btn-primary" 
        type="submit"
        style={{marginTop: "10px"}}>Search</button>
        </form>
    );
};

export default Form;