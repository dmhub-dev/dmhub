import { VideoIcon } from "@/components/widgets/VideoIcon";
import React from "react";

export default function PageNotFound() {
  return (
    <>
      <hr className="w-full" />
      <section className="py-20">
        <div className="container w-full max-w-4xl">
          <div className="size-40 mb-8 rounded-md border flex items-center justify-center">
            <VideoIcon src="/videos/maintenance.mp4" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Page under construction</h1>
          <p className="text-gray-600 text-lg">
            We are actively developing some parts of this website, please check
            back soon to discover how our services can revolutionise your
            business.
          </p>
        </div>
      </section>
    </>
  );
}
