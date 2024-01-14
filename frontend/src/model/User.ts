export interface SignInRequest {
    username: string;
    password: string;
}

export interface SignUpRequest extends SignInRequest {
    name: string;
    surname: string;
    username: string;
    password: string;
    rfid: string;
    licensePlate: string;
}

export interface User {
    username: string;
    accessToken: string;
}