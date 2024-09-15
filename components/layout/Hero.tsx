import React from "react";

interface HeroProps {
  backgroundImg?: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImg = "/img/hero-bg.jpg" }) => {
  return (
    <div
      className="bg-cover w-full h-[180px] bg-[80%]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    ></div>
  );
};

export default Hero;
