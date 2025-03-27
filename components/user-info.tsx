import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface UserInfoProps {
    user?: ExtendedUser;
    label?: string;
}


export default function UserInfo({user,label}:UserInfoProps) {
  return (
    <Card className="w-[600px] bg-slate-950/30 text-slate-200 shadow-md border-2 border-blue-950 mt-10">
        <CardHeader>
            <p className="text-2xl font-semibold text-center">{label}</p>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20  p-3  shadow-sm">
                <p className="text-sm font-medium">
                    ID
                </p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-900/80 px-4 text-violet-400 rounded-md">{user?.id}</p>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 border-slate-100/20   shadow-sm">
                <p className="text-sm font-medium">
                    UserName
                </p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-900/80 px-4 text-white rounded-md">{user?.name}</p>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20  p-3 shadow-sm">
                <p className="text-sm font-medium">
                    Email
                </p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-900/80 px-4 text-amber-400 rounded-md">{user?.email}</p>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20  p-3 shadow-sm">
                <p className="text-sm font-medium">
                    Role
                </p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-900/80 px-4 text-lime-400  rounded-md">{user?.role}</p>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20  p-3 shadow-sm">
                <p className="text-sm font-medium">
                    Two Factor Authentication
                </p>
                <p className="truncate text-xs max-w-[180px] text-white  p-1  rounded-md">
                    <Badge variant={user?.isTwoFactorEnabled ? "success" :"destructive"}
                    >
                    {user?.isTwoFactorEnabled ? "ON" :"OFF"}
                    </Badge>
                    </p>
            </div>


        </CardContent>
    </Card>
  );
}