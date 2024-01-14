import {SignInRequest, SignUpRequest, User} from "@/model/User";
import RestService, {URLS} from "@/services/RestService";

export function registerUser(signUpRequest: SignUpRequest): Promise<User> {
    return RestService.ajax(`${URLS.users}/register`, "POST", undefined, signUpRequest);
}