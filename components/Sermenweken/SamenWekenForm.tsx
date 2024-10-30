"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function SamwekenForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      voornaam: "",
      achternaam: "",
      bedrijfsnaam: "",
      message: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {/* Voornaam and Achternaam */}
      <div className="flex gap-4">
        <div className="w-3/4">
            <Input
            type="text"
            placeholder="Voornaam"
            {...register("voornaam", { required: true })}
            />
            {errors.voornaam && (
            <span className="text-red-500 text-sm">Voornaam is required</span>
            )}
        </div>
        <div className="w-1/4">
            <Input
            type="text"
            placeholder="Achternaam"
            {...register("achternaam", { required: true })}
            />
            {errors.achternaam && (
            <span className="text-red-500 text-sm">Achternaam is required</span>
            )}
        </div>
      </div>

      {/* Bedrijfsnaam */}
      <div>
        <Input
          type="text"
          placeholder="Bedrijfsnaam"
          {...register("bedrijfsnaam")}
        />
      </div>

      {/* Vraag */}
      <div>
        <textarea
          placeholder="Omschrijf op welke manier je graag een samenwerking zou willen opzetten..."
          {...register("message", { required: true })}
          className="input-class w-full h-24 border rounded px-2 py-1"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Vraag is required</span>
        )}
      </div>

      <div  className="flex gap-4">
        <div className="w-3/4">
            <Input
            type="email"
            placeholder="E-mailadres"
            {...register("email", { required: true })}
            />
            {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
            )}
        </div>
        <Button type="submit" className="bg-red-500 text-white w-1/4">
            Verzend
        </Button>
      </div>
    </form>
  );
}

export default SamwekenForm;
