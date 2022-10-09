import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
  function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/main/users/${id}`
      );
      const json = await response.json();
      setName(json.name);
    };
    fetchData();
  }, [id]);

  const handleChange = event => {
    setId(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (id) {
      fetchData();
    } else {
      alert("Please insert valid id");
    }
  };

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
