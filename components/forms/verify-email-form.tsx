"use client";
import useOtpInput from "@/hooks/useOtpInput";
import { useTimer } from "@/hooks/useTimer";
import Button from "@/ui/Button";
import FormInput from "@/ui/FormInput";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

function VerifyEmailForm({ email }: { email: string }) {
  //   const router = useRouter();
  const { timer, resetTimer } = useTimer(30);
  const { setInputRef, handleKeyDown, handleKeyUp } = useOtpInput(4);

  //   useEffect(() => {
  //     if (!email) {
  //       router.push("/forgot-password");
  //     }
  //   }, [email, router]);

  const handleRequestOtp = () => {
    if (timer > 0) return;
    resetTimer(30);
  };

  return (
    <section className="auth-section">
      <h2 className="capitalize">Authentication</h2>
      <p>
        An <span className="font-bold">OTP</span> was sent to {email}
        <span className="font-bold"></span>
      </p>
      <FormInput>
        <div className="w-full flex-center gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="tel"
              name="otp"
              // disabled={isVerifying || isRequesting}
              maxLength={1}
              ref={(el) => setInputRef(el, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onKeyUp={(e) => handleKeyUp(e, index)}
              // value={values[index] || ""}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              className="lg:size-15 size-10 rounded-md ring-1 ring-gray-light text-center text-2xl text-black"
            />
          ))}
        </div>
        <div className="col-center w-full gap-2">
          <p
            onClick={handleRequestOtp}
            className=" text-xs font-semibold text-primary cursor-pointer hover:underline"
          >
            {timer > 0 ? `Resend in ${timer}s` : "   Send again "}
          </p>
        </div>
        <div className="col-center gap-8 w-full lg:max-w-[80%]">
          <Button variant="primary" size="full">
            Continue
          </Button>
        </div>
      </FormInput>
    </section>
  );
}

export default VerifyEmailForm;
