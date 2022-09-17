import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Freesignup = () => {
  const Navigate = useNavigate();

  const [freelancername, setFreelancername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Password Does not Match");
    } else {
      const user = { freelancername, email, password, confirmPassword };

      axios.post("https://rakshanmernapp.herokuapp.com/freelansignup", user);

      setEmail("");

      setFreelancername("");

      setPassword("");

      setconfirmPassword("");

      Navigate("/freesignin");

      alert("Signup Succesfully");
    }
  };

  const Handleclick = () => {
    Navigate("/freesignin");
  };

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-8 shadow p-3 mb-5  rounded ">
            <h3 className="text-center p-3">Freelancer-signup</h3>

            <form className="row g-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  required
                  value={freelancername}
                  onChange={(e) => setFreelancername(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>

              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary m-2"
                  
                >
                  Signup
                </button>
              </div>
              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary m-2"
                  onClick={Handleclick}
                >
                  Change to SignIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freesignup;
