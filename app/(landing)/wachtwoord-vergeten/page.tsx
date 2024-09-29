import PasswordResetForm from "@/components/auth/PasswordResetForm";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Hero />
      <section className="min-h-32 w-full bg-gray-100">
        <div className="container py-10">
          <PasswordResetForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
