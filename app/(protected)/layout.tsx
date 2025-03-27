// import Navbar from "./_components/navbar";

// interface ProtectedLayoutProps {
//     children: React.ReactNode;
// };

// const Protectedlayout = ({children}:ProtectedLayoutProps) => {
//     return (
//         // <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
//         <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
//             <Navbar/>
//             {children}
//         </div>
//     );
// }

// export default Protectedlayout;

import { Spotlight } from "@/components/ui/spotlight-new";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const Protectedlayout = ({ children }: ProtectedLayoutProps) => {
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
      <Navbar/>
      {children}
    </main>
  );
};

export default Protectedlayout;
