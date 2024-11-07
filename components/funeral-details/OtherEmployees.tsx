import React from "react";
interface Profile {
    name: string;
    location: string;
    distance: string;
    image: string;
    rating: number;
    tags: string[];
    priceRange: string;
  }
  
  const profiles: Profile[] = [
    {
      name: 'Lisa van Dasselaar',
      location: 'Monuta Apeldoorn',
      distance: 'Apeldoorn 1.2 km',
      image: '/img/contact.jpg', 
      rating: 7.5,
      tags: ['begrafenis', 'duurzaam', 'groen', 'begrafenis', 'duurzaam', 'groen' ],
      priceRange: '€ 1.200 - 1.800',
    },
    {
      name: 'John Hansen',
      location: 'Monuta Zwolle',
      distance: 'Zwolle 30 km',
      image: '/img/contact.jpg', 
      rating: 7.5,
      tags: ['begrafenis', 'duurzaam', 'groen', 'begrafenis', 'duurzaam', 'groen' ],
      priceRange: '€ 1.200 - 1.800',
    },
    {
      name: 'Mike Wissel',
      location: 'Monuta Epe',
      distance: 'Epe 8 km',
      image: '/img/contact.jpg', 
      rating: 7.5,
      tags: ['begrafenis', 'duurzaam', 'groen', 'begrafenis', 'duurzaam', 'groen' ],
      priceRange: '€ 1.200 - 1.800',
    },
  ];
  
  const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (
      <div className="max-w-sm bg-white shadow-lg overflow-hidden mr-4">
        {/* Profile Image */}
        <div className="flex justify-center mt-2 bg-[#48a38b] h-[70px] bg-opacity-45">
          <img
            className="w-24 h-24 rounded-full object-cover z-10 top-5 relative"
            src={profile.image}
            alt={profile.name}
          />
        </div>
  
  
        {/* Score */}
        <div className="flex justify-between px-2 mt-12">
          <div className=" text-left">
            <h2 className="text-[15px] font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-600">{profile.location}</p>
          </div>
          <div className="text-white bg-[#48a38b] font-semibold rounded-full h-8 w-8 flex justify-center items-center">
            {profile.rating}
          </div>
        </div>
  
        {/* Tags */}
        <div className="flex flex-wrap w-full gap-1 justify-center mt-2 ">
          {profile.tags.map((tag, index) => (
            <span
              key={index}
              className="border border-2 border-[#2b998a] rounded-[10px] p-[2px] text-[11px] text-center"
            >
              {tag}
            </span>
          ))}
        </div>
          <div className=" text-[12px] text-center  my-2 text-[#48a38b] font-semibold">
          aannametarief: {profile.priceRange}
        </div>
          <div className="bg-[#48a38b] text-white text-center py-3">
          {profile.distance}
        </div>
      </div>
    );
  };
  
  const OtherEmployees: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-[14px] font-semibold text-teal-600 mb-6">Collegas van Eric Sepp</h1>
        <div className="flex  justify-center">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    );
  };
  
  export default OtherEmployees;