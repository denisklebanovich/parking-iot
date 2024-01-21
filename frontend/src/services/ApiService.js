import RestService, {URLS} from "./RestService";
import {jwtDecode} from "jwt-decode";

class ApiService {
    static async signin(signInRequest) {
        try {
            const response = await RestService.ajax(URLS.signin, "POST", null, signInRequest);
            const token = response.token;
            localStorage.setItem("token", token);
            const user = JSON.stringify(jwtDecode(token));
            localStorage.setItem("user", user);
            return JSON.parse(user);
        } catch (error) {
            console.error('Failed to sign in:', error);
        }
    }

    static async getParkingInfo(userId) {
        try {
            return await RestService.ajax(`${URLS.parking}/current`, "GET", new URLSearchParams({userId}), null);
        } catch (error) {
            console.error('Failed to fetch parking info:', error);
        }
    }

    static async getParkingHistory(userId) {
        try {
            const response = await RestService.ajax(`${URLS.parking}/events`, "GET", new URLSearchParams({userId}), null);
            console.log(response);
            return response;
        } catch (error) {
            console.error('Failed to fetch parking history:', error);
        }
    }

    static async getParkings() {
        try {
            return await RestService.ajax(`${URLS.parking}/info`, "GET", null, null);
        } catch (error) {
            console.error('Failed to fetch currently parked users:', error);
        }
    }

    static async getAdminStatistics() {
        try {
            return await RestService.ajax(`${URLS.parking}/statistics`, "GET", null, null);
        } catch (error) {
            console.error('Failed to fetch admin statistics:', error);
        }
    }

    static async signup(userRequest) {
        try {
            return await RestService.ajax(URLS.register, "POST", null, userRequest);
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    }
}

export default ApiService;
