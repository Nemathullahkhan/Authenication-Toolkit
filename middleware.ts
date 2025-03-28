import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "./routes";

const {auth } = NextAuth(authConfig);


export default auth((req)=>{
 const {nextUrl} = req;
 const isLoggedin = !!req.auth;

 const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix); // allow the routes such as for next-auth
 const isPublicRoute = publicRoutes.includes(nextUrl.pathname); //publicly availble to users
 const isAuthRoute = authRoutes.includes(nextUrl.pathname); // protecting the application by using these routes if the user is loggedin then redirect them back to application page if the user is loggedOut then redirect them back to login page

 if(isApiAuthRoute){
    return undefined;
 }

 if(isAuthRoute){
    if(isLoggedin){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
    };
    return undefined;
 }

 if(!isLoggedin && !isPublicRoute){
   let callbackUrl = nextUrl.pathname;
   if(nextUrl.search){
      callbackUrl = nextUrl.search;
   }       
   const encodedCallbackUrl = encodeURIComponent(callbackUrl);
   return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`,nextUrl));

 }

 return undefined;
})

export const config = {
    matcher:['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|trpc)(.*)'],
}