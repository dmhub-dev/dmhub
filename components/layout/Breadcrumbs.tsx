import { truncate } from "lodash";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreachCrumbItem = {
  title: string;
  link: string;
};

const Breadcrumbs = ({
  title = "",
  breadcrumbs = [],
}: {
  title: string;
  breadcrumbs: BreachCrumbItem[];
}) => {
  return (
    <section className="w-full py-3 bg-gray-100">
      <div className="container max-w-7xl flex items-center">
        <Link
          className="text-primary hover:underline uppercase text-sm"
          href="/"
        >
          <Home className="h-4 w-auto" />
        </Link>
        <ChevronRight className="mx-2 text-black/60 h-4" />
        {breadcrumbs.map((i) => (
          <React.Fragment key={i.link}>
            <Link
              className="text-primary hover:underline uppercase text-sm"
              href={i.link}
            >
              {i.title}
            </Link>
            <ChevronRight className="mx-2 text-black/60 h-4" />
          </React.Fragment>
        ))}
        <span
          className="text-black/80 uppercase text-sm overflow-hidden whitespace-nowrap text-ellipsis"
          dangerouslySetInnerHTML={{ __html: truncate(title, { length: 30 }) }}
        />
      </div>
    </section>
  );
};

export default Breadcrumbs;
