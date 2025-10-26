import Button from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import InputField from "@/ui/InputField";
import React from "react";

export const metadata = {
  title: "Forgot Password",
  description:
    "Enter the 4-digit otp code sent to your email to reset your password",
};

export default function Page() {
  return (
    <section className="auth-section">
      <h2 className="capitalize">Forgot Password</h2>
      <FormInput>
        <InputField
          config={{
            placeholder: "Enter your email address",
          }}
          label="Email"
        />
        <div className="col-center gap-8 w-full lg:max-w-[80%]">
          <Button variant="primary" size="full">
            Continue
          </Button>
        </div>
      </FormInput>
    </section>
  );
}
