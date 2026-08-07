import ImageRevealBackground from "./components/ImageRevealBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-jakarta text-black">

      {/* Background */}
      <ImageRevealBackground />

      {/* Navigation */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* =========================
          SELECTED WORK
      ========================== */}
      <section
        id="work"
        className="relative z-10 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mb-12 flex items-end justify-between border-b border-black pb-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-500">
              01 / SELECTED WORK
            </p>

            <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
              MY WORK
            </h2>
          </div>

          <span className="hidden text-sm md:block">
            VIDEO EDITOR / VISUAL CREATOR
          </span>
        </div>

        {/* =========================
            VIDEO GRID
        ========================== */}
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">

          {/* PROJECT 01 */}
          <div className="group cursor-pointer">

            <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-black transition-transform duration-500 group-hover:scale-[0.98]">
              <video
                src="/project01.mp4"
                className="h-full w-full object-contain"
                controls
                preload="metadata"
                playsInline
              />
            </div>

            <div className="mx-auto mt-4 flex max-w-[360px] justify-between">
              <h3 className="text-xl font-medium">
                Cinematic Edit
              </h3>

              <span className="text-sm text-gray-500">
                2026
              </span>
            </div>

          </div>


          {/* PROJECT 02 */}
          <div className="group cursor-pointer">

            <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-black transition-transform duration-500 group-hover:scale-[0.98]">
              <video
                src="/project02.mp4"
                className="h-full w-full object-contain"
                controls
                preload="metadata"
                playsInline
              />
            </div>

            <div className="mx-auto mt-4 flex max-w-[360px] justify-between">
              <h3 className="text-xl font-medium">
                Social Media Edit
              </h3>

              <span className="text-sm text-gray-500">
                2026
              </span>
            </div>

          </div>


          {/* PROJECT 03 */}
          <div className="group cursor-pointer">

            <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-black transition-transform duration-500 group-hover:scale-[0.98]">
              <video
                src="/project03.mp4"
                className="h-full w-full object-contain"
                controls
                preload="metadata"
                playsInline
              />
            </div>

            <div className="mx-auto mt-4 flex max-w-[360px] justify-between">
              <h3 className="text-xl font-medium">
                Brand Commercial
              </h3>

              <span className="text-sm text-gray-500">
                2026
              </span>
            </div>

          </div>


          {/* PROJECT 04 */}
          <div className="group cursor-pointer">

            <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-black transition-transform duration-500 group-hover:scale-[0.98]">
              <video
                src="/project04.mp4"
                className="h-full w-full object-contain"
                controls
                preload="metadata"
                playsInline
              />
            </div>

            <div className="mx-auto mt-4 flex max-w-[360px] justify-between">
              <h3 className="text-xl font-medium">
                Fitness / Gym Edit
              </h3>

              <span className="text-sm text-gray-500">
                2026
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="services"
        className="relative z-10 border-t border-black px-6 py-24 md:px-12 lg:px-20"
      >
        <p className="text-xs tracking-[0.3em] text-gray-500">
          02 / SERVICES
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          WHAT I DO
        </h2>

        <div className="mt-16 divide-y divide-black border-y border-black">

          <div className="flex items-center justify-between py-8">
            <h3 className="text-2xl md:text-4xl">
              VIDEO EDITING
            </h3>

            <span className="text-sm text-gray-500">
              01
            </span>
          </div>

          <div className="flex items-center justify-between py-8">
            <h3 className="text-2xl md:text-4xl">
              MOTION DESIGN
            </h3>

            <span className="text-sm text-gray-500">
              02
            </span>
          </div>

          <div className="flex items-center justify-between py-8">
            <h3 className="text-2xl md:text-4xl">
              COLOR GRADING
            </h3>

            <span className="text-sm text-gray-500">
              03
            </span>
          </div>

          <div className="flex items-center justify-between py-8">
            <h3 className="text-2xl md:text-4xl">
              SOCIAL CONTENT
            </h3>

            <span className="text-sm text-gray-500">
              04
            </span>
          </div>

        </div>
      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section
        id="about"
        className="relative z-10 border-t border-black px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-xs tracking-[0.3em] text-gray-500">
              03 / ABOUT
            </p>

            <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              I&apos;M
              <br />
              MANOJ.
            </h2>
          </div>

          <div className="max-w-xl self-end">

            <p className="text-xl leading-relaxed md:text-2xl">
              I&apos;m Manoj, a video editor and visual creator
              focused on cinematic storytelling, creative visuals
              and modern editing.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-gray-500">
              BSc Computer Science (AI & DS)
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          SKILLS
      ========================== */}
      <section
        className="relative z-10 border-t border-black px-6 py-24 md:px-12 lg:px-20"
      >

        <p className="text-xs tracking-[0.3em] text-gray-500">
          04 / SKILLS
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-3xl font-medium md:text-5xl">

          <span>VIDEO EDITING</span>

          <span>•</span>

          <span>MOTION</span>

          <span>•</span>

          <span>COLOR</span>

          <span>•</span>

          <span>STORYTELLING</span>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contact"
        className="relative z-10 border-t border-black px-6 py-32 md:px-12 lg:px-20"
      >

        <p className="text-xs tracking-[0.3em] text-gray-500">
          05 / CONTACT
        </p>

        <h2 className="mt-6 text-6xl font-semibold tracking-tight md:text-[9rem]">
          LET&apos;S
          <br />
          CREATE.
        </h2>

        <div className="mt-12 flex flex-col gap-4 text-lg md:flex-row md:gap-10">

          {/* EMAIL */}
          <a
            href="mailto:manojdurai915@gmail.com"
            className="underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            EMAIL ME ↗
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/manuww_off/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            INSTAGRAM ↗
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/916382387421"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-50"
          >
            WHATSAPP ↗
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="relative z-10 border-t border-black px-6 py-8 md:px-12 lg:px-20">

        <div className="flex flex-col items-center justify-center gap-3 text-xs tracking-[0.2em] md:flex-row md:justify-between">

          <span className="border border-black bg-black px-4 py-2 text-white">
            MANOJ © 2026
          </span>

          <span className="border border-black bg-black px-4 py-2 text-white">
            VIDEO EDITOR / VISUAL CREATOR
          </span>

          <span className="border border-black bg-black px-4 py-2 text-white">
            BSc CS (AI & DS)
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;