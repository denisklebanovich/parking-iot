import RestService, {URLS} from "@/services/RestService";
import type {SignUpRequest, User} from "@/model/User";

export function registerUser(signUpRequest: SignUpRequest): Promise<User> {
    return RestService.ajax(`${URLS.users}/register`, "POST", undefined, signUpRequest);
}