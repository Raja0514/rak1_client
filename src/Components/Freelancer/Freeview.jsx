import React, { Component } from "react";
import axios from "axios";
class Viewproject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3003/projects").then((res) => {
      const projects1 = res.data;
      console.log(projects1);
      this.setState({ projects: projects1 });
    });
  }

  render() {
    return (
      <>
        <div className="container mt-5 py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ClientName</th>
                      <th>Email</th>
                      <th>Responsive</th>
                      <th>FrontEnd</th>
                      <th>Backend</th>
                      <th>Database</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.projects.map((m) => {
                      return (
                        <tr key={m._id}>
                          <td>{m.clientname}</td>
                          <td>{m.email}</td>
                          <td>{m.responsive}</td>
                          <td>{m.frontend}</td>
                          <td>{m.backend}</td>
                          <td>{m.database}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Viewproject;
