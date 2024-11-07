import React from "react";

export default function HeaderSection({
  title,
  subTitle,
  img,
}: {
  title: string;
  subTitle?: string;
  img: string;
}) {
  return (
    <section
      className="w-full bg-blue-800 text-white bg-center bg-cover bg-no-repeat"
      style={
        img
          ? {
              backgroundImage: `url(${img})`,
            }
          : {}
      }
    >
      <div className="container py-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">{title}</h1>
        {subTitle && <p className="text-base text-white/80">{subTitle}</p>}
      </div>
    </section>
  );
}
