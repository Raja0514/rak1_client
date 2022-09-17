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
    axios.get("https://rakshanmernapp.herokuapp.com/projects").then((res) => {
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
              <div className="table-responsive text-center fs-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ClientName</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.projects.map((m) => {
                      return (
                        <tr key={m._id}>
                          <td>{m.clientname}</td>
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
