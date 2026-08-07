const SQUARE = 3.8;
const ROWS = 4;
const ROW_H = 18 / ROWS;
const COLS = 10;
const SHIFT = 2.25;

export default function Checkerboard({ className = "" }: { className?: string }) {
  const squares: { x: number; y: number }[] = [];

  for (let row = 0; row < ROWS; row++) {
    const isEven = row % 2 === 0;
    const offsetX = isEven ? SHIFT : 0;
    for (let col = 0; col < COLS; col++) {
      const x = col * SQUARE - offsetX;
      if (x < -SQUARE || x > 36) continue;
      squares.push({ x, y: row * ROW_H });
    }
  }

  return (
    <svg
      viewBox="0 0 36 18"
      className={className}
      style={{ width: "var(--checker-w)", height: "var(--checker-h)" }}
      aria-hidden="true"
    >
      {squares.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={SQUARE} height={SQUARE} fill="black" />
      ))}
    </svg>
  );
}
