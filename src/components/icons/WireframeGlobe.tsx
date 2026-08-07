export default function WireframeGlobe({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      style={{ width: "var(--globe)", height: "var(--globe)" }}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.2" />
      <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="32" rx="28" ry="11" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="32" rx="28" ry="20" stroke="currentColor" strokeWidth="1.2" />
      <line x1="32" y1="4" x2="32" y2="60" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="32" rx="11" ry="28" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="32" rx="20" ry="28" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
