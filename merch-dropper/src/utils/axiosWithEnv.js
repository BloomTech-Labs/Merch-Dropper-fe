import axios from "axios";

export const axiosWithEnv = () => {
  let url;
  if (process.env.REACT_APP_BASE_URL === "development") {
    url = "http://localhost:5032";
  } else {
    url = "https://merchdropper-production.herokuapp.com";
  }

  return axios.create({
    baseURL: url,
  });
};
