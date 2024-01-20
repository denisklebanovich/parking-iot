import axios from "axios";
import router from "@/router";

export const ROOT_URL = 'http://localhost:8080';
export const URLS = {
  signin: `${ROOT_URL}/auth/signin`,
  signup: `${ROOT_URL}/auth/signup`,
  users: `${ROOT_URL}/users`,
  events: `${ROOT_URL}/events`,
  history: `${ROOT_URL}/history`,
  parkings: `${ROOT_URL}/parkings`,
  statistics: `${ROOT_URL}/statistics`,
};

export const AUTH_HEADER = (url) => {
  const user = localStorage.getItem("user");
  if (user) {
    return {
      Authorization: `Bearer ${JSON.parse(user).access_token}`,
    };
  }
};

class RestService {
  static async ajax(url, method, queryParams, data, headers) {
    url = this.setQueryParams(url, queryParams);
    const config = {
      url,
      method,
      data,
      headers: { ...headers, ...AUTH_HEADER(url) },
    };
    try {
      return await axios.request(config).then((response) => {
        return response.data;
      });
    } catch (e) {
      if (e.response.status === 401) {
        localStorage.removeItem("user");
        router.push("/login");
      } else throw e;
    }
  }

  static setQueryParams(url, queryParams) {
    if (queryParams) {
      return `${url}?${queryParams.toString()}`;
    }
    return url;
  }
}

export default RestService;
