// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import type { User } from "~/models/user.server";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { generalApi } from "./generalApi";
import { LocalStorageKey, localStorageService } from "./localStorageService";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email")?.toString() ?? "";
    let password = form.get("password")?.toString() ?? "";
    let response = await generalApi.login(email, password);
    console.log({ response });
    localStorageService.set(LocalStorageKey.TOKEN, response.token);
    localStorageService.set(LocalStorageKey.USER, response.user);
    // the type of this user must match the type you pass to the Authenticator
    // the strategy will automatically inherit the type if you instantiate
    // directly inside the `use` method
    return response;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);
