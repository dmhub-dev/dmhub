import React from "react";

export default function MainCTA({
  title = "Start a project",
  subTitle = "We've helped some of the world-class entrepreneurs & tech companies increase efficiency & reduce development costs.",
}: {
  title?: string;
  subTitle?: string;
}) {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div>
            <span className="block leading-[1] text-5xl font-bold -mb-4">
              “
            </span>
            <blockquote>
              <p className="mt-6 text-xl leading-relaxed text-black">
                Working with DM Hub has been a game-changer for our marketing
                website at Brand New Day. Their expertise in maintenance and
                development has helped us streamline our digital tools, ensuring
                everything runs smoothly and efficiently.
              </p>
            </blockquote>
            <p className="mt-6 text-base font-semibold text-black">Dajo R.</p>
            <p className="mt-1 text-base text-gray-600">BrandNewDay</p>
          </div>

          <div>
            <div className="overflow-hidden bg-white">
              <div className="p-8 lg:px-12 lg:py-10">
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <p className="mt-4 text-base text-gray-600">{subTitle}</p>

                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  Book a call
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                  role="button"
                >
                  Let&apos;s chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
