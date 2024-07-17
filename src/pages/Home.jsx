import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row h-full items-center justify-center">
      <button className="btn btn-primary" onClick={() => navigate("/tokens")}>
        Login
      </button>
    </div>
  );
};

export default Home;
