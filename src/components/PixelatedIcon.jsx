import { motion } from 'framer-motion';

// 5-row pixel chevron [col, row], 3x3 units each
// Chevron spans cols 0..3 (width: 12 units)
const CHEVRON_PIXELS = [
  // Row 0
  [0, 0], [1, 0],
  // Row 1
  [1, 1], [2, 1],
  // Row 2 (tip)
  [2, 2], [3, 2],
  // Row 3
  [1, 3], [2, 3],
  // Row 4
  [0, 4], [1, 4],
];

// Each chevron is 12 units wide + 6 units gap (2 empty columns) = 18 units wavelength
// Repeat across offsets for seamless infinite conveyor
const OFFSETS = [-36, -18, 0, 18, 36, 54];

export default function PixelatedIcon({ className = "w-[24px] h-[12px]", isHovered = false, color = "#111111" }) {
  return (
    <div className="overflow-hidden w-[26px] sm:w-[28px] h-[13px] sm:h-[14px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 32 15"
        className={className}
        style={{ imageRendering: 'pixelated' }}
      >
        <motion.g
          animate={{
            x: [0, 0, 3, 3, 6, 6, 9, 9, 12, 12, 15, 15, 18],
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 0.6 : 1.2,
            times: [
              0, 0.155,
              0.166, 0.32,
              0.333, 0.488,
              0.5, 0.655,
              0.666, 0.822,
              0.833, 0.988,
              1,
            ],
            ease: 'linear',
          }}
        >
          {OFFSETS.map((offset) =>
            CHEVRON_PIXELS.map(([col, row], idx) => {
              const x = col * 3 + offset;
              const y = row * 3;
              return (
                <rect
                  key={`${offset}-${idx}`}
                  x={x}
                  y={y}
                  width={2.7}
                  height={2.7}
                  fill={color}
                  rx={0.2}
                />
              );
            })
          )}
        </motion.g>
      </svg>
    </div>
  );
}
