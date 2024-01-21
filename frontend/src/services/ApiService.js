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
            // return await RestService.ajax(URLS.parkings, "GET", null, null);
            const mockData = [
                {
                    parkingIndex: 'A1',
                    parkingAddress: 'Address1',
                    parkingCapacity: 20,
                    parkingFreePlaces: 10,
                    parkedUsers: [{name: 'Jonh Doe', dateOfEntry: '2021-01-01 12:30:00'}, {
                        name: 'Jane Doe',
                        dateOfEntry: '2021-01-01 12:30:00'
                    }]
                },
                {
                    parkingIndex: 'B1',
                    parkingAddress: 'Address2',
                    parkingCapacity: 30,
                    parkingFreePlaces: 15,
                    parkedUsers: [{name: 'Jane Doe', dateOfEntry: '2021-01-01 12:30:00'}]
                },
            ];
            return mockData;
        } catch (error) {
            console.error('Failed to fetch currently parked users:', error);
        }
    }

    static async getAdminStatistics() {
        try {
            // return await RestService.ajax(URLS.statistics, "GET", null, null);

            const mockData = {
                totalUsers: 20,
                totalParkingSpaces: 10,
                averageStayTime: '00:30:00',
                mostUsedParkingPlace: 'A1'
            };
            return mockData;
        } catch (error) {
            console.error('Failed to fetch admin statistics:', error);
        }
    }

    static async signup() {
        try {
            // return await RestService.ajax(URLS.signup, "POST", null, userData);
            return true;
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    }
}

export default ApiService;
