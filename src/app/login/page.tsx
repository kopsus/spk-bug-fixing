import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-4">
      <LoginForm />
    </div>
  );
}
