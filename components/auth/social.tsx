"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import {signIn} from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export default function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onClick = (provider: "google" | "github")=>{
    signIn(provider,{
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })

  }
  return (
    <div className="flex items-center w-full gap-x-2 mb-6">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-1/2 bg-black/10 border-zinc-800"
        onClick={() =>onClick("google")}
      >
        <FcGoogle className="w-12 h-12"/>
      </Button>
      <Button
        variant={"outline"}
        className="w-1/2 bg-black/10 border-zinc-800 group"
        onClick={() =>onClick("github")}
      >
        <FaGithub className="w-12 h-12 text-white group-hover:text-black"/>
      </Button>
    </div>
  );
}
