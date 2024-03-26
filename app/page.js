import { sendMail } from "@/lib/mail";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import HomePage from "@/app/components/HomePage";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  );
}
