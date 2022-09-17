import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Freesignin = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    axios
      .post("https://rakshanmernapp.herokuapp.com/freelanlogin", user)

      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res));
        alert("login Succesfully");
        Navigate("/applyproject");
      });
  };

  const Handleclick = () => {
    Navigate("/freesignup");
  };

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7 shadow p-3 mb-5  rounded ">
            <h3 className="text-center p-3">Freelancer-Login</h3>

            <form className="row g-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button type="submit" className="btn btn-secondary m-2">
                  Login
                </button>
              </div>
              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary m-2"
                  onClick={Handleclick}
                >
                  Change to Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freesignin;
