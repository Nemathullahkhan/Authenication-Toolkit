export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
        {children}
    </div>
  );
}