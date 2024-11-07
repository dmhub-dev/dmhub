"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  funeralType: z.string().min(1, "Please specify the type of funeral."),
  period: z.enum(["Per direct", "Op korte termijn", "In de toekomst"]),
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
});

type FormData = z.infer<typeof formSchema>;

const DownloadForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 rounded-[20px] ">
      <div>
        <label className="block  font-medium text-black font-semibold  mb-1 text-[14px]">
        Reden aanvraag
        </label>
        <select
          {...register("funeralType")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48a38b text-[14px]"
        >
          <option value="" >Ik download deze brochure omdat …</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>

        {errors.funeralType && (
          <p className="text-red-600 text-sm mt-1">{errors.funeralType.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block  font-medium text-black font-semibold  mb-1 text-[14px]">
            Naam
          </label>
          <input
            type="text"
            placeholder="Naam"
            {...register("name")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48a38b]"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block  font-medium text-black font-semibold mb-1 text-[14px]">
            E-mailadres
          </label>
          <input
            type="email"
            placeholder="E-mailadres"
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48a38b] text-[14px]"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1 text-[14px]">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black font-semibold mb-1 text-[14px] ">
          Telefoonnummer
        </label>
        <input
          type="tel"
          placeholder="Telefoonnummer"
          {...register("phone")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48a38b] text-[14px]"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-1   text-[14px]">{errors.phone.message}</p>
        )}
      </div>


      {/* Submit Button */}
      <div className="mt-6 flex justify-between">
      <p className="mt-6 text-[14px]  w-2/3 text-black">
      Uw gegevens zijn 100% veilig en worden niet gedeeld met
      anderen. Deze uitvaartverzorger zal nog contact met u opnemen    
      </p>
       <div className="mt-7 ">
       <button
        type="submit"
        className="px-6 py-2 bg-[#48a38b] text-white rounded-lg hover:bg-[#3b8874] text-[14px]"
      >
        VERSTUUR
      </button>
       </div>
      </div>
    </form>
  );
};

export default DownloadForm;
