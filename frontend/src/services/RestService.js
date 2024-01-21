import axios from "axios";
import router from "@/router";

export const ROOT_URL = 'http://localhost:8080/api';
export const URLS = {
    signin: `${ROOT_URL}/auth/signin`,
    signup: `${ROOT_URL}/auth/signup`,
    users: `${ROOT_URL}/users`,
    events: `${ROOT_URL}/events`,
    parking: `${ROOT_URL}/parking`,
    statistics: `${ROOT_URL}/statistics`,
};

export const AUTH_HEADER = (url) => {
    let token = localStorage.getItem("token")
    if (token == 'undefined'){
        token = null
    }
    if (token) {
        return {
            Authorization: `Bearer ${token}`,
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
            headers: {...headers, ...AUTH_HEADER(url)},
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
