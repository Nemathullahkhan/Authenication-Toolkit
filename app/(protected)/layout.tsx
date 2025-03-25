import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const Protectedlayout = ({children}:ProtectedLayoutProps) => {
    return (
        <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
            <Navbar/>
            {children}
        </div>
    );
}

export default Protectedlayout;