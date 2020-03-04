import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProject, createProject } from "../../actions/projectActions";

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: {}
    };
    this.handleStateOnChange = this.handleStateOnChange.bind(this);
    this.handleProjectFormSubmit = this.handleProjectFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProject(
      this.props.match.params.projectIdentifier,
      this.props.history
    );
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    } = nextProps.project;

    this.setState({
      id: id,
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      startDate: startDate,
      endDate: endDate
    });
  }

  handleStateOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleProjectFormSubmit(event) {
    event.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.createProject(updateProject, this.props.history);
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project Form</h5>
              <hr className="bg-success" />
              <form onSubmit={this.handleProjectFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.projectName
                    })}
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.handleStateOnChange}
                  />
                  {this.state.errors.projectName && (
                    <div className="invalid-feedback">
                      {this.state.errors.projectName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.projectIdentifier
                    })}
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.handleStateOnChange}
                    disabled
                  />
                  {this.state.errors.projectIdentifier && (
                    <div className="invalid-feedback">
                      {this.state.errors.projectIdentifier}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": this.state.errors.description
                    })}
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleStateOnChange}
                  />
                  {this.state.errors.description && (
                    <div className="invalid-feedback">
                      {this.state.errors.description}
                    </div>
                  )}
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
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project.project,
  errors: state.errors
});

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
