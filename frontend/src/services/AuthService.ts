import RestService, { URLS } from "@/services/RestService";
import type { SignInRequest, SignUpRequest, User } from "@/model/User";

export function signup(signUpRequest: SignUpRequest): Promise<User> {
  return RestService.ajax(URLS.signup, "POST", undefined, signUpRequest);
}

export function signin(signInRequest: SignInRequest): Promise<User> {
  return RestService.ajax(URLS.login, "POST", undefined, signInRequest);
}

