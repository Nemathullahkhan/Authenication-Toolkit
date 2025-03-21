import CardWrapper from "./card-wrapper";

export default function LoginForm() {
  return (
    <div>
        <CardWrapper
         headerLabel="Welcome back!"
         backButtonLabel="Don't have an accoun?"
         backButtonHref = "/auth/register"
         showSocial
         />
    </div>
  );
}