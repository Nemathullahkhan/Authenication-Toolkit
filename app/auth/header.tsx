import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label?:string;
}


export default function Header({label}:HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
        <h1 className={cn("text-4xl font-semibold text-slate-200",font.className)}>
            Auth
        </h1>
        <p className="text-md text-slate-200  text-muted-foreground text-center">
            {label}
        </p>
    </div>
  );
}
