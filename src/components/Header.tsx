export default function Header() {
  return (
    <header
      className="relative z-20 flex items-center justify-between"
      style={{
        paddingInline: "var(--pad-x)",
        paddingTop: "var(--header-pt)",
        paddingBottom: "var(--section-gap)",
      }}
    >
      {/* Logo */}
      <button
        className="font-orbitron font-black uppercase transition-opacity hover:opacity-70"
        style={{
          fontSize: "var(--logo)",
          letterSpacing: "0.15em",
        }}
      >
        MANOJ
      </button>

      {/* Navigation */}
      <nav
        className="font-jakarta flex items-center font-medium uppercase text-black"
        style={{
          gap: "var(--gap-nav)",
          fontSize: "var(--nav)",
          letterSpacing: "0.2em",
        }}
      >
        <a
          href="#work"
          className="transition-opacity hover:opacity-50"
        >
          WORK
        </a>

        <a
          href="#services"
          className="transition-opacity hover:opacity-50"
        >
          SERVICES
        </a>

        <a
          href="#about"
          className="transition-opacity hover:opacity-50"
        >
          ABOUT
        </a>

        <span className="text-gray-300">|</span>

        <a
          href="#contact"
          className="transition-opacity hover:opacity-50"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
}