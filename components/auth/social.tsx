"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import {signIn} from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {

  const onClick = (provider: "google" | "github")=>{
    signIn(provider,{
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })

  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-1/2"
        onClick={() =>onClick("google")}
      >
        <FcGoogle className="w-4 h-5"/>
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-1/2"
        onClick={() =>onClick("github")}
      >
        <FaGithub className="w-4 h-5"/>
      </Button>
    </div>
  );
}
