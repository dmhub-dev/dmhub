import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Hero />
      <section className="min-h-32 w-full bg-gray-100">
        <div className="container py-10">
          <form className="max-w-2xl mx-auto grid gap-4 w-full p-16 py-12 bg-white border shadow-xl -mt-32">
            <h1 className="text-[40px] font-bold text-teal-600 font-sans">
              Login
            </h1>
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Password" name="password" type="password" />
            <Button>Login</Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
