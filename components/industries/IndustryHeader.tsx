import React from "react";

export default function IndustryHeader({
  img,
  title,
  icon = "/icons/cloud.png",
  description,
}: {
  img?: string;
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <section className="w-full bg-gray-100">
      {img ? (
        <img
          src={img}
          alt={title}
          className="w-full block object-cover h-[240px] bg-blue-800"
        />
      ) : (
        <div className="h-[240px] bg-blue-800"></div>
      )}
      <div className="container w-full -mt-20 md:flex items-end gap-10  flex-wrap">
        <div className="size-40 rounded-md flex items-center justify-center bg-slate-800">
          <img src={icon} alt="" className="h-20 w-auto invert" />
        </div>
        <h1 className="font-bold text-3xl mb-4 capitalize">{title}</h1>
      </div>
      <div className="container w-full bg-gray-100 pt-10 pb-16">
        <article className="text-base max-w-4xl">{description}</article>
      </div>
    </section>
  );
}
