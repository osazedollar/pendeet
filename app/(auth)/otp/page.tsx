import VerifyEmailForm from "@/components/forms/verify-email-form";
// import { redirect } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  const email = searchParams.email ?? "";

  // I commented this out so we could test without getting redirected; on live we would uncomment it
  // if (!email) {
  //   redirect("/forgot-password");
  // }

  return <VerifyEmailForm email={email} />;
}
