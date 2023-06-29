import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <h1>Welcome to The Star Wars Api Handler</h1>
      <h3>May The Force Be With You</h3>
        <BrowserRouter>
        <Routes>
        <Route element={<Form category={category} setCategory={setCategory} id={id} setId={setId}/>} path="/"/>
        <Route element={<People id={id} setId={setId}/>} path="/people/:id"/>
        <Route element={<Planets id={id} setId={setId}/>} path="/planets/:id" />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
