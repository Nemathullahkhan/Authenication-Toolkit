"use client";

import { useRouter } from "next/navigation";


interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect"; // default to redirect but why are we using mode here? how does it work?
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
                TODO: IMPLEMENT MODAL LOGIN
            </span>
        );
    }


  return (
    <span onClick={onclick}>
        {children}
    </span>
  );
}