import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Clientsignin = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Handleclick = () => {
    Navigate("/clientsignup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("working");
    const user = { email, password };
    // console.log(email);
    // console.log(password);
    axios
      .post("https://rakshanmernapp.herokuapp.com/clientlogin", user)
      //console.log(user)
      .then((res) => {
        //console.log(res);
        localStorage.setItem("auth", JSON.stringify(res));
        alert("login Succesfully");
        Navigate("/post");
      });
  };
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-6 shadow p-3 mb-5  rounded ">
            <h3 className="text-center p-3">Client-SignIn</h3>
            <form className="row g-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                />
              </div>
              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button type="submit" className="btn btn-secondary ">
                  Signin
                </button>
              </div>
              <div className=" d-grid gap-2 col-md-4 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={Handleclick}
                >
                  Chance to Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clientsignin;
