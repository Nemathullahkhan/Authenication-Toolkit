import {auth} from "@/auth";

export default auth((req)=>{

    const isLoggedIn = !! req.auth;
    console.log("Route: ",req.nextUrl.pathname);
    console.log("IS LOGGEDIN: ",isLoggedIn);

})

export const config = {
    matcher:['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|trpc)(.*)'],
}