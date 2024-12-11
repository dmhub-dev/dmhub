import React from "react";
import Head from "next/head";
import RegistrationForm from "@/components/layout/RegistrationForm";
import Image from "next/image";
import colabIcon from "../../public/icons/collaborate.png";
import skil from "../../public/icons/skills.png";
import groupc from "../../public/icons/group-chat.png";

const RegistrationPage = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8", color: "black", minHeight: "100vh", padding: "30px" }}>
         <div className="bg-white p-6 rounded-lg shadow-md mb-4">
         <h1 className="text-5xl font-bold mt-8 mb-8 text-center text-blue-600">Work With Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-0.5">
              <div className="col-span-1 md:col-span-1">
                <div className="text-center">
                  <div className="icon">
                  <Image src={colabIcon} width={100} height={100} alt={""} />                
                  </div>
                  <h4 className="text-xl text-blue-600 font-bold mt-2 mb-2">Join Our Team</h4>
                  <p className="text-black-600">Discover exciting opportunities to grow your career.</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <div className="text-center">
                <div className="icon">
                  <Image src={skil} width={100} height={100} alt={""} />                
                </div>
                  <h4 className="text-xl text-blue-600 font-bold mt-2 mb-2">Develop Your Skills</h4>
                  <p className="text-black-600">Enhance your coding abilities with our training programs.</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <div className="text-center">
                <div className="icon">
                  <Image src={groupc} width={100} height={100} alt={""} />                
                </div>
                <h4 className="text-xl font-bold text-blue-600 mt-2 mb-2">Collaborate with Experts</h4>
                  <p className="text-black-600">Work alongside experienced professionals and learn from the best.</p>
                </div>
              </div>
            </div>

      <Head>
        <title>Stay Connected</title>
      </Head>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "justify", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Left Section */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color:"blue-600" }}>Stay Connected</h1>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "10px" }}>
            DM Hub is open for new talent as we provide opportunities to practice your skills.
          </p>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
          Fill in the form to book an interview for our open positions.
          </p>
        </div>
        
        {/* Right Section */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <RegistrationForm />
        </div>
      </div>
    </div>
    </div>
  );
};
export default RegistrationPage;
