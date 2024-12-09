"use client";

import React from 'react';
import Form from '@/components/widgets/Form';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function Page() {
  const handleContactSubmit = (formData: { [key: string]: any }) => {
    console.log("Contact Form Data:", formData);
    alert("Your inquiry has been submitted successfully!");
  };

  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
  ];

  const contactInputs = [
    { name: "firstName", type: "text", label: "First Name", placeholder: "First Name", required: true },
    { name: "lastName", type: "text", label: "Last Name", placeholder: "Last Name", required: true },
    { name: "email", type: "email", label: "Email Address", placeholder: "Email Address", required: true },
    { name: "phoneNumber", type: "text", label: "Phone Number", placeholder: "Phone Number", required: true },
    { name: "country", type: "select", label: "Country", placeholder: "Select Country", options: ["USA", "UK", "India", "Australia"], required: false },
    { name: "website", type: "text", label: "Website", placeholder: "http://", required: false },
    { name: "referral", type: "text", label: "I Heard About You From", placeholder: "Google", required: false },
    { name: "services", type: "select", label: "Service I Need", options: ["Web Design", "SEO", "Digital Marketing", "App Development"], required: true },
    { name: "message", type: "textarea", label: "Your Message", placeholder: "Your Message", required: true, rows: 5 },
  ];

  return (
    <>
      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto">  

          <Breadcrumbs breadcrumbs={breadcrumbs} title={''} />         

            <div className="text-center">
              <h1 className="text-3xl font-bold text-black sm:text-4xl">Contact us</h1>
              <p className="mt-1 text-black">We would love to talk about how we can help you.</p>
            </div>
            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                <Form
                    inputs={contactInputs}
                    submitButtonText="Send Inquiry"
                    onSubmit={handleContactSubmit}
                  />

              </div>
              <div className="divide-y divide-gray-200 ">
                <div className="flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-dark " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <div className="grow">
                    <h3 className="font-semibold text-black ">Netherland&apos;s Office</h3>
                    <p className="mt-1 text-sm text-black"></p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-black hover:text-gray-800 focus:outline-none focus:text-gray-800 " href="#">
                      Contact support
                      <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className=" flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                  <div className="grow">
                    <h3 className="font-semibold text-black">Nairobi&apos;s Office</h3>
                    <p className="mt-1 text-sm text-black">Piedmont Plaza, Ngong Road , Nairobi.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-black hover:text-gray-800 focus:outline-none focus:text-black" href="#">
                      Contact Us
                      <svg className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className=" flex gap-x-7 py-6">
                  <svg className="shrink-0 size-6 mt-1.5 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                  <div className="grow">
                    <h3 className="font-semibold text-black">Contact us by email</h3>
                    <p className="mt-1 text-sm text-black ">If you wish to write us an email instead please use</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-black hover:text-gray-800 focus:outline-none focus:text-black" href="#">
                      info@dmhub.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


