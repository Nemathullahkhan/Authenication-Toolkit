"use client";

import { useSearchParams } from "next/navigation";
import CardWrapper from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import FormError from "../form-error";
import FormSuccess from "../form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token,success,error]); // TODO: if we use only token then it solves the error 

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex  flex-col items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormError message={error} />
        {!success && <FormSuccess message={success} />}
      </div>
    </CardWrapper>
  );
};
