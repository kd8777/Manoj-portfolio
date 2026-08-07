import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <main
      id="hero-scroll"
      className="relative z-10 min-h-[calc(100vh-90px)] px-6 md:px-12 lg:px-20"
    >
      <div className="grid min-h-[calc(100vh-90px)] items-center lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div className="relative z-20">

          <h1
            className="font-orbitron font-extrabold uppercase text-black"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
            }}
          >
            <span className="block whitespace-nowrap">
              VISUAL
            </span>

            <span className="block whitespace-nowrap">
              STORIES
            </span>

            <span className="block whitespace-nowrap">
              IN MOTION
            </span>
          </h1>

          {/* ROLE */}

          <div className="mt-10 space-y-1 text-sm font-medium uppercase tracking-[0.2em]">

            <p>VIDEO EDITOR</p>

            <p>MOTION DESIGNER</p>

            <p>VISUAL STORYTELLER</p>

          </div>

          {/* BUTTON */}

          <button
            className="group mt-10 flex items-center gap-5 border border-gray-400 px-7 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            VIEW MY WORK

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* RIGHT SIDE
            PHOTO IS HANDLED BY
            ImageRevealBackground
        */}

        <div className="hidden lg:block" />

      </div>
    </main>
  );
}