import RestService, { URLS } from "@/services/RestService";
import type { SignInRequest, SignUpRequest, User } from "@/model/User";

export function signin(signInRequest: SignInRequest): Promise<User> {
  return RestService.ajax(URLS.login, "POST", undefined, signInRequest);
}

