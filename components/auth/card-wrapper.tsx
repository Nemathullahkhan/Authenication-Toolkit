"use client"

import Header from "@/app/auth/header";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    className?: string;
    headerLabel?: string;
    backButtonLabel?: string;
    backButtonHref: string;
    showSocial?: boolean;
}
export default function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}:CardWrapperProps) {
  return (
    <Card className="w-[500px] bg-slate-950/30 text-slate-200 shadow-md border-2 border-blue-950">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
        <Social/>

        {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
            </CardFooter>
            )}
        <CardFooter className="flex justify-center">
            <BackButton label = {backButtonLabel}
            href = {backButtonHref}/>
        </CardFooter>
    </Card>
  );
}