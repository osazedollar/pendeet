import React from "react";
import Button from "@/ui/Button";
import FormInput from "@/ui/FormInput";
import InputField from "@/ui/InputField";

export default function Page() {
  return (
    <section className="auth-section">
      <h2 className="capitalize">Create new Password</h2>
      <p className="text-[#3E4958]">
        Your new password must be different from used password
      </p>
      <FormInput>
        <InputField
          config={{
            type: "password",
            placeholder: "********",
          }}
          label="New Password"
        />
        <InputField
          config={{
            type: "password",
            placeholder: "********",
          }}
          label="Repeat Password"
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
