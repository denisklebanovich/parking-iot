import RestService, {URLS} from "./RestService";

class ApiService {
  static async signin(signInRequest) {
    try {
    // return await RestService.ajax(URLS.login, "POST", null, signInRequest);

    // Тут нужно как-то обработать токен, и вернуть его в виде {name: '', surname: '', role: '', token: ''}
    const mockData = {
      username: 'john.doe',
      name: 'John',
      surname: 'Doe',
      role: 'ADMIN',
      token: 'mocked_token',
    }
    return mockData;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  static async getParkingInfo(username) {
    try {
      // return await RestService.ajax(URLS.parking, "GET", username, null);

      //Если адрес или индекс пустой, на странице парковки будет отображаться "You are not parked"
      const mockData = {
        parkingIndex: '1',
        parkingAddress: 'Address1',
        parkingCapacity: 20,
        parkingFreePlaces: 10,
      };
      return mockData;
    } catch (error) {
      console.error('Failed to fetch parking info:', error);
      throw error;
    }
  }

  static async getParkingHistory(username) {
    try {
      // return await RestService.ajax(URLS.history, "GET", username, null);
      const mockData = [
        {parkingAddress: 'Some address1', dateOfEntry: '2021-01-01 12:00:00', dateOfLeaving: '2021-01-01 12:30:00'},
        {parkingAddress: 'Some address1', dateOfEntry: '2021-01-01 12:00:00', dateOfLeaving: '2021-01-01 12:30:00'},
      ];
      return mockData;
    } catch (error) {
      console.error('Failed to fetch parking history:', error);
      throw error;
    }
  }

  static async getParkings() {
    try {
      // return await RestService.ajax(URLS.parkings, "GET", null, null);
      const mockData = [
        { parkingIndex: 'A1', parkingAddress: 'Address1', parkingCapacity: 20, parkingFreePlaces: 10, parkedUsers: [{name: 'Jonh Doe', dateOfEntry:'2021-01-01 12:30:00'}, {name: 'Jane Doe', dateOfEntry:'2021-01-01 12:30:00'}]},
        { parkingIndex: 'B1', parkingAddress: 'Address2', parkingCapacity: 30, parkingFreePlaces: 15, parkedUsers: [{name: 'Jane Doe', dateOfEntry:'2021-01-01 12:30:00'}]},
        ];
      return mockData;
    } catch (error) {
      console.error('Failed to fetch currently parked users:', error);
      throw error;
    }
  }

  static async getAdminStatistics() {
    try {
      // return await RestService.ajax(URLS.statistics, "GET", null, null);
      
      const mockData = { 
        totalUsers: 20, 
        totalParkingSpaces: 10, 
        averageStayTime: '00:30:00', 
        mostUsedParkingPlace: 'A1' };
      return mockData;
    } catch (error) {
      console.error('Failed to fetch admin statistics:', error);
      throw error;
    }
  }

  static async signup() {
    try {
      // return await RestService.ajax(URLS.signup, "POST", null, userData);
      return true;
    } catch (error) {
      console.error('Failed to add user:', error);
      throw error;
    }
  }
}

export default ApiService;
