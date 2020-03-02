import axios from "axios";
import { GET_ERRORS } from "./types";
import { myCustomConsole } from "../ConsoleUtils";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8081/api/project", project);
    history.push("/dashboard");
    myCustomConsole(res);
  } catch (error) {
    myCustomConsole(error.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
