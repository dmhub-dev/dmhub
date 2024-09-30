"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

function ContactForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
          <span className="error-text">Voornaam is required</span>
        )}
      </div>
      <div className="form-group md:col-span-2">
        <Input
          type="text"
          placeholder="Achternaam"
          {...register("achternaam", { required: true })}
        />
        {errors.achternaam && (
          <span className="error-text">Achternaam is required</span>
        )}
      </div>

      {/* Dropdowns */}
      <div className="md:col-span-3">
        <select
          className="border p-2.5 rounded-none w-full pr-4"
          {...register("role", { required: true })}
        >
          <option value="">Ik ben een...</option>
          <option value="consumer">Consument</option>
          <option value="provider">Uitvaartverzorger</option>
        </select>
        {errors.role && <span className="error-text">required</span>}
      </div>
      <div className="md:col-span-3">
        <select
          {...register("subject", { required: true })}
          className="border p-2.5 rounded-none w-full pr-4"
        >
          <option value="">Onderwerp...</option>
          <option value="vraag">Vraag</option>
          <option value="suggestie">Suggestie</option>
        </select>
        {errors.subject && (
          <span className="error-text">Subject is required</span>
        )}
      </div>

      {/* Vraag */}
      <div className="md:col-span-6">
        <textarea
          placeholder="Vraag"
          {...register("question", { required: true })}
          className="input-class w-full h-24 border rounded-none px-2 py-1"
        />
        {errors.question && (
          <span className="error-text">Vraag is required</span>
        )}
      </div>

      {/* Email */}
      <div className="md:col-span-4">
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-text">Email is required</span>}
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
