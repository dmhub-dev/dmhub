import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { Form } from "react-hook-form";
import router from "next/router";

const SignUp = () => {
    return (
      <div className="flex justify-left items-left h-screen bg-gray-100">
        <div>
          <h1 className="text-black-500 text-4xl mb-8 text-center">Wat zijn uw contactgegevens?</h1>
          <Form />
        </div>
            <h2 className="text-black text-4xl mb-b text-center">Expertise Heeft u vragen? Neem direct <a href="/contact" className="text-blue-500 underline">contact</a> met ons op</h2>
      </div>
    );
  };
  
  export default SignUp;