"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    const onServerActionClick = ()=>{
         admin()
         .then((data)=>{
            if(data.error){
                toast.error(data.error);
            }
            if(data.success){
                toast.success(data.success);
            }
         })
    }

    const onAPiRouteClick = ()=>{
        fetch("/api/admin").then((response)=> {
            if(response.ok){
                toast.success("Allowed API Route!")
            }else{
                toast.error("FORBIDDEN API Route!")
            }
        })
    }
  return (
    <Card className="w-[600px] bg-slate-950/30 text-slate-200 shadow-md border-2 border-blue-950 mt-10">
      <CardHeader>
    <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20 p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onAPiRouteClick} className="bg-slate-900/80 hover:bg-slate-300 hover:text-black transition-colors" >Click to test</Button>
        </div>
        
        <div className="flex flex-row items-center justify-between rounded-lg border border-slate-100/20 p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}  className="bg-slate-900/80 hover:bg-slate-300 hover:text-black transition-colors">Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
