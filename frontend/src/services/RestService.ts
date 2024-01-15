import axios from "axios";
import router from "@/router";

export type Method = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
export const ROOT_URL = import.meta.env.VITE_BACKEND_URL;
export const URLS = {
  login: `${ROOT_URL}/auth/signin`,
  users: `${ROOT_URL}/users`,
  events: `${ROOT_URL}/events`,
};

export const AUTH_HEADER = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return {
      Authorization: `Bearer ${JSON.parse(user).access_token}`
    };
  }
};
export default class RestService {
  // @ts-ignore
  public static async ajax<REQUEST, RESPONSE>(
    url: string,
    method: Method,
    queryParams?: URLSearchParams,
    data?: REQUEST,
    headers?: any
  ) {
    url = this.setQueryParams(url, queryParams);
    const config = {
      url,
      method,
      data,
      headers: { ...headers, ...AUTH_HEADER() }
    };
    try {
      return await axios.request<RESPONSE>(config).then((response) => {
        return response.data;
      });
    } catch (e : any) {
      if (e.response.status === 401) {
        localStorage.removeItem("user");
        router.push("/signin");
      } else throw e;
    }
  }

  public static setQueryParams(url: string, queryParams?: URLSearchParams) {
    if (queryParams) {
      return `${url}?${queryParams.toString()}`;
    }
    return url;
  }
}