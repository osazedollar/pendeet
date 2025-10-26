import SignupForm from "@/components/forms/signup-form";
import React from "react";

export const metadata = {
  title: "Sign up",
  description:
    "Create a pendeet account and experience online shopping like never before.",
};

export default function Page() {
  return (
    <section className="auth-section">
      <h2 className="capitalize">Sign Up</h2>
      <SignupForm />
    </section>
  );
}
