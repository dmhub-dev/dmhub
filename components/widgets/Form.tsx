"use client";

import React, { useState } from "react";

type FormInput = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: string[]; 
  multiple?: boolean;
};

type FormProps = {
  inputs: FormInput[];
  submitButtonText: string;
  onSubmit: (formData: { [key: string]: any }) => void;
};

export default function Form({
  inputs,
  submitButtonText,
  onSubmit,
}: FormProps) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full bg-white">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inputs.map((input, index) => (
          <div
            key={index}
            className={`${
              input.type === "textarea" || input.type === "select" ? "col-span-2" : "col-span-1"
            }`}
          >
            {input.label && (
              <label
                htmlFor={input.name}
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                {input.label}
                {input.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}
            {input.type === "textarea" ? (
              <textarea
                id={input.name}
                name={input.name}
                rows={input.rows || 4}
                placeholder={input.placeholder}
                required={input.required}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            ) : input.type === "select" ? (
              <select
                id={input.name}
                name={input.name}
                required={input.required}
                multiple={input.multiple}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  {input.placeholder}
                </option>
                {input.options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={input.type}
                id={input.name}
                name={input.name}
                placeholder={input.placeholder}
                required={input.required}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            )}
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-md shadow-md font-semibold hover:bg-blue-700 transition-all"
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
}
