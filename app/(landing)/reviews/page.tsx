"use client"; 

import { useState } from 'react';
import Stepper from '@/components/reviews/stepper';

interface ReviewProps {
  params: {
    id: string;
  };
}

const ReviewForm: React.FC<ReviewProps> = ({ params }) => {
  const { id } = params;
  const [formData, setFormData] = useState({
    title: '',
    review: '',
    showName: false,
    fullName: '',
    email: '',
    personalityRating: 1,
    qualityRating: 1,  
    priceRating: 1, 
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  
  

  const handleRatingChange = (ratingName: string, newRating: number) => {
    const adjustedRating = Math.max(1, Math.min(newRating, 10));
    setFormData((prevData) => ({
      ...prevData,
      [ratingName]: adjustedRating,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    console.log("Form Data Submitted:", formData);

    fetch(`/reviews/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) 
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="w-full px-8 py-1 bg-white">
      <span className="relative inline-block bg-red-500 text-white px-9 py-1 text-[11px] rounded-full font-semibold">
        Ervaring schrijven
        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-3 h-3 bg-red-500 rotate-45"></span>
      </span>
      <hr className="border-0 h-0.5 bg-red-600 mt-4" />
      <div className="mt-1 w-2/3">
        <form onSubmit={handleSubmit}>
          <div className='flex gap-4 w-full'>
            <div className="mb-2 w-1/2">
              <label className="block text-md font-semibold text-gray-700 mb-2">Schrijf uw ervaring over ID: {id}</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Titel onderwerp"
                className="w-full p-2 border border-gray-300 mb-2 mt-8 text-sm"
              />
              <textarea
                name="review"
                value={formData.review}           
                onChange={handleInputChange}
                placeholder="Schrijf hier uw review"
                className="w-full p-2 border border-gray-300 text-sm"
                rows={2}
              />
              <hr className="border-0 h-0.5 bg-black" />
            </div>

            <div className="mb-2 w-1/2">
              <div className="mb-6">
                <label className="block text-md font-semibold text-gray-700 mb-2">Mogen wij uw naam tonen bij uw ervaring?</label>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="showName"
                      checked={formData.showName}
                      onChange={handleInputChange}
                      className="mr-2 text-sm"
                    />
                    Ja dat mag
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="showName"
                      checked={!formData.showName}
                      onChange={handleInputChange}
                      className="mr-2 text-sm"
                    />
                    Nee ik blijf anoniem
                  </label>
                </div>
                <div className="flex flex-col space-y-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Naam of achternaam"
                    className="w-full p-2 border border-gray-300 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Uw emailadres"
                    className="w-full p-2 border border-gray-300 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 w-2/3">
            <label className="block text-md font-semibold text-gray-700">Uw ervaring heeft een cijfer</label>
            <div className="flex items-center mb-4 p-0">
              <Stepper
                activeStep={formData.personalityRating}
                onStepChange={(newRating) => handleRatingChange('personalityRating', newRating)}
              />
              <label className="w-32 text-gray-600">Persoonlijkheid</label>
            </div>

            <div className="flex items-center mb-4">
              <Stepper
                activeStep={formData.qualityRating}
                onStepChange={(newRating) => handleRatingChange('qualityRating', newRating)}
              />
              <label className="w-32 text-gray-600">Kwaliteit</label>
            </div>

            <div className="flex items-center">
              <Stepper
                activeStep={formData.priceRating}
                onStepChange={(newRating) => handleRatingChange('priceRating', newRating)}
              />
              <label className="w-32 text-gray-600">Prijs</label>
            </div>

            <button type="submit" className="w-2/3 py-2 bg-red-500 text-white font-bold text-md hover:bg-red-600 mt-8">
              Verzend review
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ReviewForm;



















// // app/reviews/[reviewId]
// import { useState } from 'react';

// interface ReviewProps {
//   params: {
//     id: string;
//   };
// }

// const ReviewForm = async ({ params }: ReviewProps) => {
//   const { id } = params;

//   const [showName, setShowName] = useState(false);
//   const [personalityRating, setPersonalityRating] = useState(5);
//   const [qualityRating, setQualityRating] = useState(7);
//   const [priceRating, setPriceRating] = useState(5);

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-300 mt-10">
//       <button className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 font-semibold">Ervaring schrijven</button>
      
//       <form method="POST" action={`/api/reviews/${id}/submit`}>
//         {/* Title and Review */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-700 mb-2">Schrijf uw ervaring over ID: {id}</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="Titel onderwerp"
//             className="w-full p-2 border border-gray-300 rounded-md mb-2"
//           />
//           <textarea
//             name="review"
//             placeholder="Schrijf hier uw review"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             rows={4}
//           />
//         </div>

//         {/* Show Name Option */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-700 mb-2">mogen wij uw naam tonen bij uw ervaring?</label>
//           <div className="flex items-center space-x-4 mb-2">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="showName"
//                 value="yes"
//                 checked={showName}
//                 onChange={() => setShowName(true)}
//                 className="mr-2"
//               />
//               ja dat mag
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="showName"
//                 value="no"
//                 checked={!showName}
//                 onChange={() => setShowName(false)}
//                 className="mr-2"
//               />
//               nee ik blijf anoniem
//             </label>
//           </div>

//           {/* Name and Email (Only Visible if User Chooses to Show Name) */}
//           {showName && (
//             <div className="flex flex-col space-y-2">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Naam of achternaam"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Uw emailadres"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//           )}
//         </div>

//         {/* Rating Sliders */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-700 mb-2">Uw ervaring heeft een cijfer</label>
          
//           {/* Personality Rating */}
//           <div className="flex items-center mb-4">
//             <label className="w-32 text-gray-600">Persoonlijkheid</label>
//             <input
//               type="range"
//               name="personalityRating"
//               min="1"
//               max="10"
//               value={personalityRating}
//               onChange={(e) => setPersonalityRating(Number(e.target.value))}
//               className="w-full"
//             />
//             <span className="ml-3 text-lg font-semibold">{personalityRating}</span>
//           </div>

//           {/* Quality Rating */}
//           <div className="flex items-center mb-4">
//             <label className="w-32 text-gray-600">Kwaliteit</label>
//             <input
//               type="range"
//               name="qualityRating"
//               min="1"
//               max="10"
//               value={qualityRating}
//               onChange={(e) => setQualityRating(Number(e.target.value))}
//               className="w-full"
//             />
//             <span className="ml-3 text-lg font-semibold">{qualityRating}</span>
//           </div>

//           {/* Price Rating */}
//           <div className="flex items-center">
//             <label className="w-32 text-gray-600">Prijs</label>
//             <input
//               type="range"
//               name="priceRating"
//               min="1"
//               max="10"
//               value={priceRating}
//               onChange={(e) => setPriceRating(Number(e.target.value))}
//               className="w-full"
//             />
//             <span className="ml-3 text-lg font-semibold">{priceRating}</span>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="w-full py-3 bg-red-500 text-white font-bold text-lg rounded-md hover:bg-red-600">
//           Verzend review
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;
