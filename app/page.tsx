// import { Poppins } from "next/font/google";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import LoginButton from "@/components/auth/login-button";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

// export default function Home() {
//   return (
//     <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)] p-4">
//       <div className="space-y-6 text-center">
//         <h1
//           className={cn(
//             "text-6xl font-semibold text-white drop-shadow-md",
//             font.className
//           )}
//         >
//           Auth
//         </h1>
//         <p className="text-white text-lg">A simple authentication service</p>
//         <LoginButton >
//           <Button variant={"secondary"} size={"lg"}>
//             Sign In
//           </Button>
//         </LoginButton>
//       </div>
//     </main>
//   );
// }



import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import { Spotlight } from "@/components/ui/spotlight-new";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 p-4">
      {/* Spotlight background */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .08) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .10) 0, hsla(210, 100%, 45%, .06) 80%, transparent 100%)"
        translateY={-200}
        duration={10}
      />
      
      {/* Content */}
      <div className="relative z-10 space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="text-white/80 text-lg">A Simple Authentication Ecosystem</p>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}