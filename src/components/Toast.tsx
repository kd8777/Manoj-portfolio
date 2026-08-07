import { Check } from "lucide-react";

export default function Toast({ message }: { message: string }) {
  return (
    <div
      className="font-jakarta fixed z-50 flex items-center gap-2 rounded-md bg-black text-white shadow-lg"
      style={{
        top: "var(--header-pt)",
        right: "var(--pad-x)",
        fontSize: "var(--body)",
        padding: "0.75rem 1rem",
      }}
      role="status"
    >
      <Check size={16} className="text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}
