import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const Navigate = useNavigate();

  const [clientname, setclientName] = useState("");

  const [email, setEmail] = useState("");

  const [responsive, setResponsive] = useState("");

  const [frontend, setFrontend] = useState("");

  const [backend, setBackend] = useState("");

  const [database, setDatabase] = useState("");

  const handlePost = (e) => {

    e.preventDefault();


    const user = { clientname, email, responsive, frontend, backend, database };

    axios.post("http://localhost:3003/postproject", user);

    setEmail("");

    setclientName("");

    setResponsive("");

    setFrontend("");

    setBackend("");

    setDatabase("");

    alert("Project Requirements Added");
  };

  const Handleclick = () => {
    Navigate("/viewproject");
  };

  const Handlelogout = () => {
    localStorage.clear();
    //window.location.reload();
    Navigate("/");
  };

  return (
    <>
      <div className="container mt-5 py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 shadow p-3 mb-5  rounded">
            <h2 className="text-center p-3">
              Post Project Requirements-Client
            </h2>

            <form onSubmit={handlePost} className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="ClientName"
                  value={clientname}
                  onChange={(e) => setclientName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Responsive ?"
                  required
                  value={responsive}
                  onChange={(e) => setResponsive(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={frontend}
                  onChange={(e) => setFrontend(e.target.value)}
                  placeholder="FrontEnd"
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={backend}
                  onChange={(e) => setBackend(e.target.value)}
                  placeholder="Backend"
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={database}
                  onChange={(e) =>setDatabase(e.target.value)}
                  placeholder="DataBase"
                  required
                />
              </div>

              <div className="d-grid gap-2 col-md-2 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  
                >
                  Post
                </button>
              </div>
              <div className="d-grid gap-2 col-md-2 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={Handleclick}
                >
                  ViewProject
                </button>
              </div>

              <div className="d-grid gap-2 col-md-2 mx-auto">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={Handlelogout}
                >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
