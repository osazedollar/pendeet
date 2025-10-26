"use server";
import { httpClient } from "@/adapters/http";
import { loginSchema, registerSchema } from "@/schemas/authSchema";
import {
  BASE_COOKIE_OPTIONS,
  getErrorMessage,
  REFRESH_TOKEN_LIFETIME,
} from "@/utils/config";
import { API_PATHS } from "@/utils/enums";
// import { IActionState } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// LOGIN ACTION
export async function loginAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const cookieStore = await cookies();
  const formDataObj = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validatedFields = loginSchema.safeParse(formDataObj);

  if (!validatedFields.success) {
    console.log("zodErros:", validatedFields.error.flatten().fieldErrors);
    return {
      ...prevState,
      data: { ...prevState.data, ...formDataObj },
      zodErrors: validatedFields.error.flatten().fieldErrors,
      // message: "Missing Fields. Failed to Register",
    };
  }

  try {
    const res = await httpClient.post<AuthLoginPayload>(
      API_PATHS.LOGIN_PATH,
      formDataObj
    );
    console.log({ res });
    const { accessToken, refreshToken, account } = res.data;

    cookieStore.set({
      ...BASE_COOKIE_OPTIONS,
      value: accessToken,
      httpOnly: false,
    });

    cookieStore.set({
      ...BASE_COOKIE_OPTIONS,
      name: "refresh",
      value: refreshToken,
      maxAge: REFRESH_TOKEN_LIFETIME,
    });

    return {
      ...prevState,
      message: "Login success",
      data: {
        account,
        access: accessToken,
      },
      zodErrors: null,
    };
  } catch (err) {
    return {
      ...prevState,
      message: getErrorMessage(err),
      zodErrors: null,
    };
  }
}

// REGISTER ACTION
export async function registerAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const formDataObj = {
    email: formData.get("email"),
    password: formData.get("password"),
    cPassword: formData.get("cPassword"),
  };

  const validatedFields = registerSchema.safeParse(formDataObj);

  if (!validatedFields.success) {
    console.log("zodErros:", validatedFields.error.flatten().fieldErrors);
    return {
      ...prevState,
      data: { ...prevState.data, ...formDataObj },
      zodErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await httpClient.post<AuthRegisterPayload>(
      API_PATHS.REGISTRATION_PATH,
      payload
    );
    console.log({ res });

    return {
      ...prevState,
      message: "Registeration success",
      zodErrors: null,
    };
  } catch (err) {
    return {
      ...prevState,
      message: getErrorMessage(err),
      zodErrors: null,
    };
  }
}

////////////////////LOGIN ACTION

// export async function auth_refresh_token_action() {
//   const _cookies = await cookies();
//   const token = _cookies.get("refresh");
//   return token?.value;
// }

export async function logoutAction() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refresh")?.value;

  if (!refreshToken) return;

  cookieStore.delete("access");
  cookieStore.set({
    ...BASE_COOKIE_OPTIONS,
    name: "refresh",
    value: "",
    maxAge: 0,
  });

  revalidatePath("/", "layout");
  redirect("/login");

  /////WE WOULD CONNECT THIS WHEN THERE'S AN API TO LOGOUT
  // try {
  //   await httpClient.post(
  //     API_PATHS.LOGOUT_PATH,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer ${refreshToken}`,
  //       },
  //     }
  //   );

  //   console.log("success logout");
  //   cookieStore.delete("access");
  //   // cookieStore.delete("refresh");
  //   cookieStore.set({
  //     ...BASE_COOKIE_OPTIONS,
  //     name: "refresh",
  //     value: "",
  //     maxAge: 0,
  //   });

  //   console.log("::> Logged out successfully");

  //   revalidatePath("/", "layout");
  //   redirect("/login");
  // } catch (err) {
  //   console.log(err);
  //   // return {
  //   //   message: "Failed to log out!",
  //   // };
  // }
}

export async function auth_refresh_token_action() {
  const _cookies = await cookies();
  const refreshToken = _cookies.get("refresh");

  if (refreshToken?.value) {
    const refreshTokenValue = refreshToken.value;

    try {
      const res = await httpClient.post(
        API_PATHS.REFRESH_PATH,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshTokenValue}`,
          },
        }
      );
      _cookies.set({
        ...BASE_COOKIE_OPTIONS,
        name: "refresh",
        value: res.data.refresh_token,
        maxAge: REFRESH_TOKEN_LIFETIME,
      });

      _cookies.set({
        ...BASE_COOKIE_OPTIONS,
        value: res.data.access_token,
        httpOnly: false,
      });

      return res.data.access_token;
    } catch (err) {
      console.log(err);
    }
  }
  return null;
}

export async function auth_update_refresh_token(refresh: string) {
  const _cookies = await cookies();
  _cookies.set({
    ...BASE_COOKIE_OPTIONS,
    name: "refresh",
    value: refresh,
    maxAge: REFRESH_TOKEN_LIFETIME,
  });
}
