import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Clientsignup = () => {
  const Navigate = useNavigate();

  const [clientname, setclientName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setconfirmPassword] = useState("");

  const Handleclick = () => {
    Navigate("/clientsignin");
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Password Does not Match");
    } else {
      const user = { clientname, email, password, confirmPassword };

      axios.post("https://rakshanmernapp.herokuapp.com/clientsignup", user);

      setEmail("");

      setclientName("");

      setPassword("");

      setconfirmPassword("");

      Navigate("/clientsignin");

      alert("Signup Succesfully");

    }
  };

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row d-flex justify-content-center align-items-cenetr ">
          <div className="col-md-8 shadow px-3 py-3 mb-3  rounded ">
            <h3 className="text-center p-3">Client-Signup </h3>

            <form className="row g-2">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="ClientName"
                  value={clientname}
                  onChange={(e) => setclientName(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>

              <div className=" d-grid gap-1 col-md-4 mx-auto">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-secondary m-2"
                >
                  Signup
                </button>
              </div>

              <div className=" d-grid gap-1 col-md-4 mx-auto">
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
export default Clientsignup;
