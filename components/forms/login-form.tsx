"use client";
import { loginAction } from "@/actions/authActions";
import FormInput from "@/ui/FormInput";
import InputField from "@/ui/InputField";
import { ICON } from "@/utils/icon-export";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { SubmitButton } from "../general/submit-button";
import toast from "react-hot-toast";
import { storeAccessToken } from "@/utils/helper-functions";

export const socialsLinks = [
  {
    icon: ICON.GOOGLE,
  },
  {
    icon: ICON.FACEBOOK,
  },
  {
    icon: ICON.APPLE,
  },
];

const initialState: IActionState = {
  message: "",
  data: {
    email: "",
    password: "",
  },
  zodErrors: null,
  // errors: undefined,
};

function LoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [state, formAction] = useActionState(loginAction, initialState);
  // const searchParams = useSearchParams();
  // const redirectTo = searchParams.get("redirect") || "/";
  // const { errors = {} } = state || {};

  const { email, password } = state?.data || {};

  useEffect(() => {
    if (
      state.message &&
      state.message.toLowerCase().includes("success") &&
      state.data
    ) {
      toast.success(state.message);
      storeAccessToken(state);
      router.push(redirectTo);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, redirectTo, router]);

  return (
    <FormInput
      config={{
        action: formAction,
      }}
    >
      {/*NB: Always add names to ur inputFields cause they are needed 4 validation and also 4 formData(server-actions) to properly handle them  */}
      <InputField
        config={{
          placeholder: "example@email.com",
          type: "email",
          name: "email",
          defaultValue: email,
        }}
        label="Email"
        error={Boolean(state?.zodErrors?.email)}
        errorMessage={state?.zodErrors?.email}
      />
      <div className="col-center gap-2 w-full">
        <InputField
          config={{
            placeholder: "********",
            type: "password",
            name: "password",
            defaultValue: password,
          }}
          label="Password"
          error={Boolean(state?.zodErrors?.password)}
          errorMessage={state?.zodErrors?.password}
        />
        <Link
          className="self-end-safe text-xs font-semibold text-primary cursor-pointer hover:underline"
          href={"/forgot-password"}
        >
          Forgot Password?
        </Link>
      </div>
      <div className="col-center gap-8 w-full lg:max-w-[80%]">
        {/*NB: Submit btn must be extracted on all server action forms because - The useFormStatus hook must be a direct descendant of the <form> tag it's observing. It cannot be used in a parent component and passed down as a prop. */}
        <SubmitButton text="Continue" />

        <div className="flex-center gap-3 w-[70%]">
          <div className="w-full bg-gray h-[1px]"></div>
          <p className="px-2 shrink-0 bg-white text-gray-light capitalize">
            or Sign Up with
          </p>
          <div className="w-full bg-gray h-[1px]"></div>
        </div>

        {/* Socials */}
        <div className="flex-center gap-6 w-[60%]">
          {socialsLinks.map((el, i) => (
            <span
              className="ring-1 cursor-pointer ring-gray-light size-10 rounded-full flex-center"
              key={i}
            >
              <Icon icon={el.icon} fontSize={22} />
            </span>
          ))}
        </div>

        {/* Link to sign Up */}

        <p className="text-gray-light">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-primary cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </FormInput>
  );
}

export default LoginForm;
