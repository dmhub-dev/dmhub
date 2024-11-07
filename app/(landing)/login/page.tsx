import LoginForm from "@/components/auth/LoginForm";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Hero />
      <section className="min-h-32 w-full bg-gray-100">
        <div className="container py-10">
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
