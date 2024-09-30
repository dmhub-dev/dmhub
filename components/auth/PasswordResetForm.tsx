"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
});

export default function PasswordResetForm() {
  const [emailSent, setEmailSent] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setEmailSent(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto grid gap-4 w-full p-16 py-8 bg-white border shadow-xl -mt-32"
      >
        <h1 className="text-[32px] mb-0 font-bold text-secondary font-sans">
          Wachtwoord vergeten
        </h1>

        {emailSent ? (
          <p className=" text-darktext text-sm">
            Er is een e-mail verstuurd naar {form.getValues("email")} met
            instructies om uw wachtwoord te wijzigen.
          </p>
        ) : (
          <p className=" text-darktext text-sm">
            Vul hieronder uw e-mailadres in om uw wachtwoord te kunnen wijzigen.
          </p>
        )}
        <div className={`${emailSent ? "hidden" : "grid"} gap-4`}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="E-mailadres" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Link href="/login" className="underline text-secondary">
              Terug
            </Link>
            <Button type="submit" className="md:w-1/2">
              verder
            </Button>
          </div>
        </div>
        {emailSent && (
          <div className="flex justify-end items-center mt-4">
            <Button type="button" className="md:w-1/2">
              sluiten
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
