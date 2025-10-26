import LoginForm from "@/components/forms/login-form";

export const metadata = {
  title: "Login",
  description: "Continue where you left off on ypur pendeet account",
};

export default function Page({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  const redirectTo = searchParams.redirect ?? "/";

  return (
    <section className="auth-section">
      <h2 className="capitalize">Sign in</h2>
      {/*NB: MetaData is needed here and must be used in a server component; dats d reason i extracted the loginForm which is a client component. */}
      <LoginForm redirectTo={redirectTo} />
    </section>
  );
}
