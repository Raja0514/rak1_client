import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container ">
        <div className="row mt-5 py-5 ">
          <div className="col-md-6 ">
            <h3 className="text-center"> Welcome to Freelancing</h3>
            <h2 className="text-center">E-Commerce Sites</h2>
            <h2 className="text-center">Professional portfolio</h2>
            <h2 className="text-center">Mobile Application</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="box"> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
