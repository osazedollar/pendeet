"use client";
import { registerAction } from "@/actions/authActions";
import FormInput from "@/ui/FormInput";
import InputField from "@/ui/InputField";
import { ICON } from "@/utils/icon-export";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SubmitButton } from "../general/submit-button";

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
    cPassword: "",
  },
  zodErrors: null,
};

function SignupForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(registerAction, initialState);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { email, password, cPassword } = state?.data || {};

  useEffect(() => {
    if (
      state.message &&
      state.message.toLowerCase().includes("success") &&
      state.data
    ) {
      toast.success(state.message);
      //   storeAccessToken(state);
      router.push("/otp");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <FormInput
      config={{
        action: formAction,
      }}
    >
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
      <InputField
        config={{
          placeholder: "********",
          type: "password",
          name: "cPassword",
          defaultValue: cPassword,
        }}
        label="Repeat password"
        error={Boolean(state?.zodErrors?.cPassword)}
        errorMessage={state?.zodErrors?.cPassword}
      />

      <div className="flex items-center w-full gap-1">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="accent-primary cursor-pointer rounded-md"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <label htmlFor="terms" className="text-[#343434] text-xs">
          <p>
            I accept the{" "}
            <a href="#" className="underline text-primary">
              terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-primary">
              privacy policy
            </a>{" "}
          </p>
        </label>
      </div>

      <div className="col-center gap-8 w-full lg:max-w-[80%]">
        <SubmitButton text="Continue" cannotSubmit={!acceptedTerms} />

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
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-primary cursor-pointer">
            Sign In
          </Link>
        </p>
      </div>
    </FormInput>
  );
}

export default SignupForm;
