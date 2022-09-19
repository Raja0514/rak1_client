import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Applyproject = () => {
  const Navigate = useNavigate();

  const [freelancername, setFreelancername] = useState("");

  const [email, setEmail] = useState("");

  const [experience, setExperience] = useState("");

  const handleApply = (e) => {
    e.preventDefault();

    const user = { freelancername, email, experience };

    axios.post("https://rakshanmernapp.herokuapp.com/applyproject", user);

    setEmail("");

    setFreelancername("");

    setExperience("");

    alert("Freelancer Data Added");
  };

  const Handleclick = () => {
    Navigate("/freeview");
  };

  const Handlelogout = () => {
    localStorage.clear();
    //window.location.reload();
    Navigate("/");
  };

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row justify-content-center   ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 shadow px-3 py-3 mb-3  rounded ">
              <h3 className="text-center p-3">Apply New Project-Freelancer</h3>

              <form class="row g-3" onSubmit={handleApply}>
                <div className="mb-2">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Experience"
                    required
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>

                <div className="d-grid gap-2 col-md-2 mx-auto">
                  <button type="submit" class="btn btn-secondary">
                    Apply
                  </button>
                </div>
                <div className="d-grid gap-2 col-md-2 mx-auto">
                  <button
                    type="submit"
                    class="btn btn-secondary"
                    onClick={Handleclick}
                  >
                    ViewProject
                  </button>
                </div>

                <div className="d-grid gap-2 col-md-2 mx-auto">
                  <button
                    type="submit"
                    class="btn btn-secondary"
                    onClick={Handlelogout}
                  >
                    Logout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applyproject;
