import { access_token_retrieve, auth_logout } from "@/api/utils";
import { BASE_BACKEND_URL } from "@/utils/config";
import axios, { InternalAxiosRequestConfig } from "axios";
// import { logoutAction } from "../_actions/authActions";

const PUBLIC_ROUTES = [
  "account/signin",
  "account/register",
  //   "auth/logout",
  //   "auth/refresh",
];

export const httpClient = axios.create({
  baseURL: BASE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authInterceptor = async (config: InternalAxiosRequestConfig) => {
  // check if public route
  const publicRoute = PUBLIC_ROUTES.includes(config.url || "");

  // attach token if not public route
  if (!publicRoute) {
    const access_token = await access_token_retrieve();

    //if no access_token logout
    if (!access_token) {
      await auth_logout();
      console.log("::> Logged out user");
      //   await logoutAction();
    }

    //else proceed with request
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
  }

  return config;
};

httpClient.interceptors.request.use(authInterceptor);
