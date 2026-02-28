import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const BackgroundBeams = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: any;
}) => {
  const beams = Array.from({ length: 100 }, (_, i) => i); // Generate 100 beams

  return (
    <div
      className={cn(
        "h-full w-full absolute inset-0 z-0 overflow-hidden",
        className
      )}
      {...rest}
    >
      {beams.map((i) => (
        <motion.div
          key={`beam-${i}`}
          initial={{
            opacity: 0,
            y: -100,
            x: Math.random() * 2000 - 1000, // Random X position
          }}
          animate={{
            opacity: [0, 0.2, 0.5, 0.2, 0],
            y: [0, 500, 1000, 1500, 2000], // Animate downwards
            transition: {
              duration: Math.random() * 10 + 5, // Random duration between 5-15s
              repeat: Infinity,
              delay: Math.random() * 5, // Random delay
            },
          }}
          className="absolute block h-px w-[200px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            left: `${Math.random() * 100}%`, // Random start position
            top: `${Math.random() * 100}%`, // Random start position
          }}
        />
      ))}
    </div>
  );
};
