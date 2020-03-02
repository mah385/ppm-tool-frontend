import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { myCustomConsole } from "../../ConsoleUtils";

class AddProject extends Component {
  state = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  handleStateOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleProjectFormSubmit = event => {
    event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    myCustomConsole(newProject);
    this.props.createProject(newProject, this.props.history);
  };
  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project Form</h5>
                <hr className="bg-success" />
                <form onSubmit={this.handleProjectFormSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.handleStateOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.handleStateOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleStateOnChange}
                    >
                      Dummy Text
                    </textarea>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.handleStateOnChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.handleStateOnChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired
};

export default connect(null, { createProject })(AddProject);
