import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { REFRESH_TOKEN_IDENTIFIER } from "./utils/config";

// nextUrl: {
//   href: 'http://localhost:3000/login',
//   origin: 'http://localhost:3000',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'localhost:3000',
//   hostname: 'localhost',
//   port: '3000',
//   pathname: '/login',
//   search: '',
//   searchParams: URLSearchParams {  },
//   hash: ''
// },

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/verify-email",
  "/otp",
  "/create-new-password",
  "/forgot-password",
  "/reset-password",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // initialize cookies
  const serverCookies = await cookies();
  const url = new URL(req.url);

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  //check authenticated
  const refresh = serverCookies.get(REFRESH_TOKEN_IDENTIFIER)?.value;
  const isAuthenticated = Boolean(refresh);

  // 🚫 Block authenticated users from visiting auth pages
  //User shouldn't be able to access login and signup when they're already authenticated
  if (isAuthenticated && isAuthRoute) {
    console.log(
      "Middleware: ✅ Authenticated, redirecting away from auth page"
    );
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🚫 Unauthenticated users cannot visit protected routes
  if (!isAuthenticated && !isAuthRoute) {
    console.log("Middleware: ⛔No refresh token found, redirecting to login");
    return NextResponse.redirect(
      url.origin + `/login?redirect=${url.pathname}`
    );
  }

  return NextResponse.next();
}

//Add all protected routes here
// "/profile/:path*"
export const config = {
  matcher: ["/cart", "/login", "/signup"],
};

{
  /*

const PUBLIC_ROUTES = ["/"]; //Add other public routes accessible by any user

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/verify-email",
  "/otp",
  "/create-new-password",
  "/forgot-password",
  "/reset-password",
];
//////////////////////////
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPublicRoute = pathname === "/" || PUBLIC_ROUTES.includes(pathname);

///////////////////////////

  if (!isAuthenticated && !isAuthRoute && !isPublicRoute) {
    // console.log("Hi from middleware");
    console.log("Middleware: ⛔No refresh token found, redirecting to login");
    return NextResponse.redirect(
      url.origin + `/login?redirect=${url.pathname}`
    );
  }

  if (isAuthenticated && isAuthRoute && !isPublicRoute) {
    console.log("Middleware: ✅ Authenticated, redirecting to route");
    return NextResponse.redirect(url.origin + "/");
  }
  // const redirect = url.searchParams.get("redirect") || "/";
  return NextResponse.next();
}
  
*/
}
