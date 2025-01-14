import clsx from "clsx";
import { BugIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SPK Bug Management & Priority",
};

export default function Home() {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center min-h-screen")}
    >
      <div className="grid place-content-center w-[200px] h-[200px] rounded-[50px] bg-red-500 mb-10 shadow-2xl shadow-red-500/90">
        <BugIcon color="#fff" size={150} />
      </div>
      <h1 className="font-black text-5xl mb-10 text-center">
        SPK Bug Priority
      </h1>
      <Link
        href="/login"
        className="bg-black dark:bg-neutral-700 hover:bg-black/80 dark:hover:bg-neutral-800 px-10 py-5 text-white text-2xl font-bold rounded-full"
      >
        Login
      </Link>
    </div>
  );
}
