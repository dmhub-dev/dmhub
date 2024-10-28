import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type TestimonialItem = {
  quote: string;
  name: string;
  job_title: string;
  img: string;
};

export default function Testimonials({
  testimonials = [],
}: {
  testimonials: TestimonialItem[];
}) {
  return (
    <section className="w-full py-8 bg-secondary/30">
      <div className="container grid grid-cols-[100px_1fr_100px] items-center">
        <button className="size-10 bg-white shadow-md rounded-full flex items-center justify-center text-secondary">
          <ChevronLeft />
        </button>
        <div className="w-full">
          {testimonials.map((i) => (
            <div
              key={i.name}
              className="grid grid-cols-[1fr_200px] w-full gap-10 text-darktext "
            >
              <div className="w-full">
                <p className="text-lg italic mb-6">&quot;{i.quote}&quot;</p>
                <b className="text-lg font-bold block">{i.name}</b>
                <span className="text-lg">{i.job_title}</span>
              </div>
              <div className="w-full flex items-center">
                <img
                  src={i.img}
                  alt=""
                  className="size-[160px] shadow-md rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="size-10 bg-white shadow-md rounded-full flex items-center justify-center text-secondary">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
