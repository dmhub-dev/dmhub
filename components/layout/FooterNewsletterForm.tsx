"use client";

import React from "react";

export default function FooterNewsletterForm() {
  return (
    <div>
      <input
        type="text"
        placeholder="Your email"
        className="p-4 rounded-md bg-white/10 text-white/70 w-full mb-3"
      />

      <button className="p-4 rounded-md bg-white w-full text-black">
        Sign Up
      </button>
    </div>
  );
}
