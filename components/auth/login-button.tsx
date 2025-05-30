"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import LoginForm from "./login-form";


interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect"; // default to redirect but why are we using mode here? how does it work?because we are using it to determine how the login button should behave. If the mode is set to "modal", it will open a modal for login. If the mode is set to "redirect", it will redirect the user to the login page.
    
    asChild?: boolean; // this is a prop that is passed to the component. It is used to determine if the component should be rendered as a child of another component or not.
}

export default function LoginButton({
    children,
    mode = "redirect",
    asChild 
}: LoginButtonProps ) {
    const router = useRouter();

    const onclick = () => {
        router.push("/auth/login"); 
    };

    if(mode === "modal") {
        return (
            <span onClick={onclick}>
                <Dialog>
                    <DialogTrigger asChild = {asChild}>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="p-0 w-auto bg-transparent border-none">
                        <LoginForm/>
                    </DialogContent>
                </Dialog>
            </span>
        );
    }


  return (
    <span onClick={onclick}>
        {children}
    </span>
  );
}