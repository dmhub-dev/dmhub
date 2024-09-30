import React from "react";


// Password Change Component
function PasswordChange() {
    return (
      <div>
         <p className="border-2 border-red-300 mb-2 p-2 text-[14px]">
          Consumenten kiezen voor de uitvaartverzorger die het beste bij ze past op basis van een zo uitgebreid mogelijk profiel.
          Vul uw profiel en overige gegevens volledig in. Nadat alles is ingevuld kan uw profiel gepubliceerd worden via de button linksonder.
        </p>
        <h2 className="text-[#2b998a]  font-semibold mb-2 text-[14px] underline">Uw persoonlijke profiel</h2>
        <h2 className="font-semibold mb-4 text-[16px]">Wachtwoord </h2>
        <form className="space-y-4">
          <div className="grid grid-rows-2 w-full h-[60px]">
            <label className="w-full text-[12px] font-semibold ">Wachtwoord aanmaken</label>
            <input className="border p-2 w-2/3" type="password"  />
          </div>
          <div className="grid grid-rows-2 w-full h-[60px]">
            <label className="w-full text-[12px] font-semibold ">Herhaal wachtwoord</label>
            <input className="border p-2 w-2/3" type="password"  />
          </div>
          <h6 className="text-[#2b998a]  mb-4 text-[12px]">Voorwaarden</h6>
          <ul className='text-[12px]'>
            <li>- Minimaal 8 tekens zonder spaties</li>
            <li>- Minimaal 1 letter</li>
            <li>- Minimaal 1 cijfer of leesteken</li>
          </ul>
          
          <button className="bg-[#2b998a] text-white px-4 py-2 mt-6 rounded text-[12px] "                 
          // onClick={() => setActiveSection('password')}
          >OPSALAAN</button>     
         </form>
      </div>
    );
  }

export default PasswordChange;