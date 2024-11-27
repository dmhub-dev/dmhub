"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Form from "@/components/widgets/Form";

function Page() {
  const searchParams = useSearchParams();
  const queryType = searchParams.get("query") || "start-project"; 

  const handleProjectSubmit = (formData: { [key: string]: any }) => {
    console.log("Form Data Submitted:", formData);
    alert("Your inquiry has been submitted successfully!");
  };

  const getFormInputs = () => {
    switch (queryType) {
      case "website-management":
        return [
          { name: "firstName", type: "text", label: "First Name", placeholder: "First Name", required: true },
          { name: "lastName", type: "text", label: "Last Name", placeholder: "Last Name", required: true },
          { name: "email", type: "email", label: "Email Address", placeholder: "Email Address", required: true },
          { name: "websiteURL", type: "text", label: "Website URL", placeholder: "https://", required: true },
          { name: "managementPlan", type: "select", label: "Management Plan", options: ["Basic", "Standard", "Premium"], required: true },
          { name: "additionalRequests", type: "textarea", label: "Additional Requests", placeholder: "Any specific requests?", rows: 5, required: false },
        ];
      case "start-project":
      default:
        return [
          { name: "firstName", type: "text", label: "First Name", placeholder: "First Name", required: true },
          { name: "lastName", type: "text", label: "Last Name", placeholder: "Last Name", required: true },
          { name: "email", type: "email", label: "Email Address", placeholder: "Email Address", required: true },
          { name: "phoneNumber", type: "text", label: "Phone Number", placeholder: "Phone Number", required: true },
          { name: "projectType", type: "select", label: "Project Type", options: ["Website", "App", "SEO", "Other"], required: true },
          { name: "details", type: "textarea", label: "Project Details", placeholder: "Describe your project...", rows: 5, required: true },
        ];
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 mx-auto ">
        <div className="container w-1/2 p-6 ">
            <Form
                inputs={getFormInputs()}
                submitButtonText="Submit Inquiry"
                onSubmit={handleProjectSubmit}
            />
        </div>
    </div>
  );
}

export default Page;
