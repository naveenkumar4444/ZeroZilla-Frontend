import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Details from "./components/Details";
import Profile from "./components/Profile";

function App() {

  const [search, setSearch] = useState("")

  return (
    <div>
      <Header setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Products search={search} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
