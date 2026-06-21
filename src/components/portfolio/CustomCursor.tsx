import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dx = useMotionValue(-100);
  const dy = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dx.set(e.clientX);
      dy.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest('a, button, [role="button"], input, textarea, .cursor-hover');
      setHovering(interactive);
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y, dx, dy]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: clicked ? 0.7 : hovering ? 2.2 : 1,
            backgroundColor: hovering ? "oklch(0.78 0.16 200 / 0.15)" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-6 w-6 rounded-full border-[1.5px] border-cyan"
          style={{ boxShadow: hovering ? "0 0 20px oklch(0.78 0.16 200 / 0.6)" : "none" }}
        />
      </motion.div>
      <motion.div
        style={{ x: dx, y: dy }}
        animate={{ scale: hovering ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
      />
    </>
  );
}
