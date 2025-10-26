declare interface AuthType {
  email: string;
  password: string;
}

declare interface IActionState {
  data?: Record<string, any>;
  // errors?: Record<string, any>;
  zodErrors?: Record<string, any> | null;
  message?: string;
}

declare type UserRole = "User" | "Creator";
declare type accountType = "Personal" | "Business";

declare interface AuthLoginPayload extends BaseBackendResponse {
  account: {
    accountId: string;
    email: string;
    role: UserRole;
    accountType: accountType;
  };
  sessionId: string;
  accessToken: string;
  refreshToken: string;
}

declare interface AuthRegisterPayload extends BaseBackendResponse {
  otpSuccess: boolean;
  accountId: string;
  role: UserRole;
  accountType: string;
}

declare interface AuthRefreshTokenPayload extends BackendAPIResponse {
  access_token: string;
  refresh_token: string;
}
