// "use client";

// import UserButton from "@/components/auth/user-button";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathName = usePathname();
//   return (
//     <nav className="bg-slate-950/30 text-slate-200 flex justify-between w-[700px] h-12 items-center p-4 rounded-xl shadow-sm">
//       <div className="flex gap-x-2">
//         <Button
//           variant={pathName === "/server" ? "default" : "outline"}
//           asChild
//           className="bg-transparent border-zinc-600"
//         >
//           <Link href="/server">Server</Link>
//         </Button>
//         <Button
//           variant={pathName === "/client" ? "default" : "outline"}
//           asChild
//           className="bg-transparent border-zinc-600"
//         >
//           <Link href="/client">Client</Link>
//         </Button>
//         <Button
//           variant={pathName === "/admin" ? "default" : "outline"}
//           asChild
//           className="bg-transparent border-zinc-600"
//         >
//           <Link href="/admin">Admin</Link>
//         </Button>
//         <Button
//           variant={pathName === "/settings" ? "default" : "outline"}
//           asChild
//           className="bg-slate-950/50 border-zinc-600"
          
//         >
//           <Link href="/settings">Settings</Link>
//         </Button>
//       </div>
//       <UserButton />
//     </nav>
//   );
// }


"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  
  // Define navigation items
  const navItems = [
    { href: "/server", label: "Server" },
    { href: "/client", label: "Client" },
    { href: "/admin", label: "Admin" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <nav className="bg-slate-950/70 text-slate-200 flex justify-between items-center px-2 py-2 rounded-xl shadow-sm w-full max-w-4xl mx-auto">
      <div className="flex gap-x-2 items-center">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathName === item.href ? "default" : "outline"}
            asChild
            className={`
              transition-all duration-200 
              ${pathName === item.href 
                ? "bg-slate-200 hover:scale-105 hover:bg-white  text-black" 
                : "bg-transparent border-zinc-600 hover:bg-slate-800/50 hover:text-white"}
            `}
          >
            <Link href={item.href}>
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center">
        <UserButton />
      </div>
    </nav>
  );
}