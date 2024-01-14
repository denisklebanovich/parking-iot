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
    license_plate: string;

}

export interface User {
    username: string;
    access_token: string;
}