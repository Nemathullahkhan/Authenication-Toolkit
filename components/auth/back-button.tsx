import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  href: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button variant={"link"} className="font-normal w-full" size = "sm">
      <Link
        href={href}
        className="w-full flex items-center justify-center gap-x-2"
      >
        <ArrowLeft size={20} className="h-5 w-5" />
        {label}
      </Link>
    </Button>
  );
}
