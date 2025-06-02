import { LoginForm } from "@/components/login-form";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-4">
      <LoginForm />
      <Card className="absolute bottom-0 right-0 p-5">
        <p>email : gibran@gmail.com</p>
        <p>password : user123</p>
      </Card>
    </div>
  );
}
