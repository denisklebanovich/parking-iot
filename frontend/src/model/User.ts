export interface SignInRequest {
    username: string;
    password: string;
    role: string;
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
    name: string;
    surname: string;
    username: string;
    rfid: string;
    role: "user" | "admin";
    licensePlate: string;
    accessToken: string;
}