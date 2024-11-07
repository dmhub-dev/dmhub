"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

const directorOptions = [
  "Vraag over myFunus",
  "Probleem met aanmelden",
  "Klacht nav aanvraag",
  "Ik wil op een andere manier samenwerken",
  "Overige",
];

const consumerOptions = [
  "Vraag over myFunus",
  "Probleem met aanvraag",
  "Klacht nav aanvraag",
  "Ik heb een andere vraag",
];

function ContactForm({
  target = "consument",
}: {
  target: string;
}): React.JSX.Element {
  const [subjectOptions, setSubjectOptions] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      voornaam: "",
      achternaam: "",
      role: target,
      subject: "",
      message: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("role", target);

    return () => {};
  }, [target]);

  useEffect(() => {
    setSubjectOptions(
      getValues("role") === "consument" ? consumerOptions : directorOptions
    );

    return () => {};
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-6 gap-4"
    >
      {/* Voornaam and Achternaam */}
      <div className="form-group md:col-span-4">
        <Input
          type="text"
          placeholder="Voornaam"
          {...register("voornaam", { required: true })}
        />
        {errors.voornaam && (
          <span className="text-red-500 text-sm">Voornaam is required</span>
        )}
      </div>
      <div className="form-group md:col-span-2">
        <Input
          type="text"
          placeholder="Achternaam"
          {...register("achternaam", { required: true })}
        />
        {errors.achternaam && (
          <span className="text-red-500 text-sm">Achternaam is required</span>
        )}
      </div>

      {/* Dropdowns */}
      <div className="md:col-span-3">
        <select
          className="border p-2.5 rounded-none w-full pr-4"
          {...register("role", { required: true })}
        >
          <option value="">Ik ben een...</option>
          <option value="consument">Consument</option>
          <option value="uitvaartverzorger">Uitvaartverzorger</option>
        </select>
        {errors.role && <span className="text-red-500 text-sm">required</span>}
      </div>
      <div className="md:col-span-3">
        <select
          {...register("subject", { required: true })}
          className="border p-2.5 rounded-none w-full pr-4"
        >
          <option value="">Onderwerp...</option>
          {subjectOptions.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="text-red-500 text-sm">Subject is required</span>
        )}
      </div>

      {/* Vraag */}
      <div className="md:col-span-6">
        <textarea
          placeholder="Vraag"
          {...register("message", { required: true })}
          className="input-class w-full h-24 border rounded-none px-2 py-1"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Vraag is required</span>
        )}
      </div>

      {/* Email */}
      <div className="md:col-span-4">
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2">
        <Button type="submit" className="bg-red-500 text-white w-full">
          Verzend
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
