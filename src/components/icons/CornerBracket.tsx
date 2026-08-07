type Corner = "tl" | "tr" | "bl" | "br";

const PATHS: Record<Corner, string> = {
  tl: "M0 11.5V0.5H11.5",
  tr: "M0.5 0.5H11.5V11.5",
  bl: "M0 0.5V11.5H11.5",
  br: "M0.5 11.5H11.5V0.5",
};

export default function CornerBracket({
  corner,
  className = "",
}: {
  corner: Corner;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      style={{ width: "var(--corner)", height: "var(--corner)" }}
      aria-hidden="true"
    >
      <path d={PATHS[corner]} stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
