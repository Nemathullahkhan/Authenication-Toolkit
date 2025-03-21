"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
      >
        <div className="flex items-center gap-x-2">
        <FcGoogle size={20} className="h-5 w-5" />
        Google
        </div>
        <div className="flex items-center gap-x-2">
        <FaGithub size={20} className="h-5 w-5" />
        Github
        </div>
      </Button>
    </div>
  );
}
