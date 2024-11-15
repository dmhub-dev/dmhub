import React from "react";

export default function ServiceHero({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <section className="w-full relative">
      <div className="w-full md:w-1/2 md:ml-[50%]">
        <img
          src={img}
          alt=""
          className="w-full h-[calc(100vh-160px)] object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container w-full">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <article className="mb-4 text-gray-600 text-base">
              Unlock the potential of your ideas with our {title} services,
              where innovation meets functionality. From concept to launch, we
              craft custom solutions tailored to your needs, ensuring seamless
              performance, user-friendly interfaces, and cutting-edge technology
              to help your business thrive.
            </article>
            <div className="flex">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                role="button"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
