import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

class ApiService {
  constructor() {
    this.baseURL = 'http://localhost:8080';
    this.mock = new MockAdapter(axios);
  }

  async login(username, password) {
    try {
      this.mock.onPost(`${this.baseURL}/api/signin`).reply(200, { token: 'mocked_token' });

      const response = await axios.post(`${this.baseURL}/api/signin`, { username, password });
      return response.data.token;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  async getUserDetails(token) {
    try {
      this.mock.onGet(`${this.baseURL}/api/user/me`, { headers: { Authorization: `Bearer ${token}` } }).reply(200, {
        name: 'John',
        surname: 'Doe',
        role: 'ADMIN',
      });

      const response = await axios.get(`${this.baseURL}/api/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch user details: ${error.message}`);
    }
  }

    async getParkingHistory(token) {
        try {
          this.mock.onGet(`${this.baseURL}/api/user/history`, { headers: { Authorization: `Bearer ${token}` } }).reply(200, [
            { parkingId: 'ABC123', dateOfEntry: '2022-01-01 10:00:00', dateOfLeaving: '2022-01-01 12:00:00' },
            { parkingId: 'CDS123', dateOfEntry: '2022-01-01 10:00:00', dateOfLeaving: '2022-01-01 12:00:00' },
          ]);
    
          const response = await axios.get(`${this.baseURL}/api/user/history`, { headers: { Authorization: `Bearer ${token}` } });
          return response.data;
        } catch (error) {
          console.error('Failed to fetch parking history:', error);
          throw error;
        }
      }
    
    async getCurrentParkingDetails(token) {
    try {
        this.mock.onGet(`${this.baseURL}/api/parking/current`, { headers: { Authorization: `Bearer ${token}` } }).reply(200, {
        parkingNumber: '1',
        parkingAddress: 'Some address',
        allSpaces: 20,
        freeSpaces: 10,
        });

        const response = await axios.get(`${this.baseURL}/api/parking/current`, { headers: { Authorization: `Bearer ${token}`} });

        return {
        parkingNumber: response.data.parkingNumber,
        parkingAddress: response.data.parkingAddress,
        allSpaces: response.data.allSpaces,
        freeSpaces: response.data.freeSpaces,
        };
    } catch (error) {
        console.error('Failed to fetch parking details:', error);
        throw error;
        }
    }

    async getCurrentlyParkedUsers(token) {
        try {
          this.mock.onGet(`${this.baseURL}/api/parking/currently-parked`, { headers: { Authorization: `Bearer ${token}` } }).reply(200, [
            { name: 'John Doe', rfidCardNumber: '123456', dateOfEntry: '2022-01-01 10:00:00' },
            { name: 'Jane Doe', rfidCardNumber: '654321', dateOfEntry: '2022-01-01 10:00:00' },
          ]);
    
          const response = await axios.get(`${this.baseURL}/api/parking/currently-parked`, { headers: { Authorization: `Bearer ${token}`} });
    
          return response.data;
        } catch (error) {
          console.error('Failed to fetch currently parked users:', error);
          throw error;
        }
    }

    async getAdminStatistics(token) {
        try {
          this.mock.onGet(`${this.baseURL}/api/statistics`, { headers: { Authorization: `Bearer ${token}` } }).reply(200, {
            totalUsers: 100,
            totalParkingSpaces: 210,
            averageStayTime: 30,
            mostUsedParkingPlace: 'A1',
          });
    
          const response = await axios.get(`${this.baseURL}/api/statistics`, { headers: { Authorization: `Bearer ${token}`} });
    
          return {
            totalUsers: response.data.totalUsers,
            totalParkingSpaces: response.data.totalParkingSpaces,
            averageStayTime: response.data.averageStayTime,
            mostUsedParkingPlace: response.data.mostUsedParkingPlace,
          };
        } catch (error) {
          console.error('Failed to fetch admin statistics:', error);
          throw error;
        }
      }

      async addUser(token, userData) {
        try {
          this.mock.onPost(`${this.baseURL}/user/register`, userData).reply(201);
    
          const response = await axios.post(`${this.baseURL}/user/register`, userData, { headers: { Authorization: `Bearer ${token}`} });
    
          return response.data;
        } catch (error) {
          console.error('Failed to add user:', error);
          throw error;
        }
      }
}

export default new ApiService();
