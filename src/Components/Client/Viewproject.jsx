import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
class Viewproject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    axios.get("https://rakshanmernapp.herokuapp.com/getallfreelancer").then((res) => {
      const projects1 = res.data;
      console.log(projects1);
      this.setState({ projects: projects1 });
    });
  }

  render() {
    return (
      <>
        <div className="container mt-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="table-responsive text-center fs-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th>FreelancerName</th>
                      <th>Email_id</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.projects.map((m) => {
                      return (
                        <tr key={m._id}>
                          <td>{m.freelancername}</td>
                          <td>{m.email}</td>
                          <td>{m.experience}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <Link to="/post" className="btn btn-success">Back</Link>

          </div>
        </div>
      </>
    );
  }
}
export default Viewproject;
