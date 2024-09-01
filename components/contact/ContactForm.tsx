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
      className="space-y-4 grid grid-cols-2 gap-4"
    >
      {/* Voornaam and Achternaam */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="form-group">
          <Input
            type="text"
            placeholder="Voornaam"
            {...register("voornaam", { required: true })}
          />
          {errors.voornaam && (
            <span className="error-text">Voornaam is required</span>
          )}
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Achternaam"
            {...register("achternaam", { required: true })}
          />
          {errors.achternaam && (
            <span className="error-text">Achternaam is required</span>
          )}
        </div>
      </div>

      {/* Dropdowns */}
      <div className="col-span-1">
        <Select {...register("role", { required: true })}>
          <option value="">Ik ben een...</option>
          <option value="consumer">Consument</option>
          <option value="provider">Uitvaartverzorger</option>
        </Select>
        {errors.role && <span className="error-text">Role is required</span>}
      </div>
      <div className="col-span-1">
        <select
          {...register("subject", { required: true })}
          className="input-class w-full border border-gray-300 rounded px-2 py-1"
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
      <div className="col-span-2">
        <textarea
          placeholder="Vraag"
          {...register("question", { required: true })}
          className="input-class w-full h-24 border border-gray-300 rounded px-2 py-1"
        />
        {errors.question && (
          <span className="error-text">Vraag is required</span>
        )}
      </div>

      {/* Email */}
      <div className="col-span-2">
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="input-class w-full border border-gray-300 rounded px-2 py-1"
        />
        {errors.email && <span className="error-text">Email is required</span>}
      </div>

      {/* Submit Button */}
      <div className="col-span-2 flex justify-end">
        <Button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Verzend
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
