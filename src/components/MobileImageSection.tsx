import { BG_IMAGE_1 } from "../lib/constants";

export default function MobileImageSection() {
  return (
    <section
      className="relative z-10 block lg:hidden"
      style={{ paddingInline: "var(--pad-x)", paddingBottom: "var(--pad-y)" }}
    >
      <div
        className="aspect-[4/5] w-full overflow-hidden border border-gray-200 sm:aspect-[16/9]"
        style={{
          backgroundImage: `url(${BG_IMAGE_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
