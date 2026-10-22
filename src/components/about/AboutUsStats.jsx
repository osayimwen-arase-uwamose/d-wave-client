import {
CalendarDays,
Users,
Clock3,
} from "lucide-react";

import Container from "../layout/Container.jsx";

const statistics = [
  {
    label: "Events Hosted",
    value: "50+",
    Icon: CalendarDays,
  },
  {
    label: "Artists Managed",
    value: "5",
    Icon: Users,
  },
  {
    label: "Combined Experience",
    value: "4 Years",
    Icon: Clock3,
  },
];

const AboutUsStats = () => {
  return ( 
    <section
      className="border-b border-slate-200 bg-slate-50 py-10 md:py-14"
      aria-label="D-Wave Entertainment at a glance"
    > 
      <Container> 
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {statistics.map(({ label, value, Icon }) => ( 
            <article
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-8"
            > 
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-700"> 
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  aria-hidden="true"
                /> 
              </div>

              <p className="mb-2 text-sm font-semibold text-slate-600">
                {label}
              </p>

              <p className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                {value}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUsStats;
