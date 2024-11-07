"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto grid gap-4 w-full p-16 py-8 bg-white border shadow-xl -mt-32"
      >
        <h1 className="text-[32px] mb-0 font-bold text-secondary font-sans">
          Inloggen
        </h1>
        <p className=" text-darktext text-sm">
          Log hieronder in met uw persoonlijke gegevens om uw profiel te kunnen
          inzien, uw account te kunnen upgraden, etc.
        </p>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Wachtwoord" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center">
          <Link
            href="/wachtwoord-vergeten"
            className="underline text-secondary"
          >
            Wachtwoord vergeten
          </Link>
          <Button type="submit" className="md:w-1/2">
            Login
          </Button>
        </div>
        <p className="text-darktext">
          Nog geen account?{" "}
          <Link href="/signup" className="underline">
            Meld u hier aan
          </Link>
        </p>
      </form>
    </Form>
  );
}
