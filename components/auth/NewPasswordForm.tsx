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
  password: z.string().min(8),
  repeat_password: z.string().min(8),
});

export default function NewPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      repeat_password: "",
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
          Nieuw wachtwoord
        </h1>

        <p className=" text-darktext text-sm">
          Vul hieronder uw nieuwe wachtwoord in. (minimaal 8 tekens, tenminste
          één cijfer, tenminste één speciaal teken)
        </p>
        <div className={`grid gap-4`}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nieuw wachtwoord"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeat_password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Herhaal nieuw wachtwoord"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end items-center">
            <Button type="submit" className="md:w-1/2">
              wijzigen
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
