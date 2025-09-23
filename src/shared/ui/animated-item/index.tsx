"use client";
import React, { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface AnimatedItemProps {
  children: ReactNode;
  amount?: number;
  duration?: number;
  delay?: number;
  index?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
  slideIn?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedItem({
  children,
  amount = 0.5,
  duration = 0.5,
  delay = 0,
  index = 0,
  stagger = 0.15,
  direction = "up",
  slideIn = false,
  onMouseEnter,
  onClick,
  className,
  style,
}: AnimatedItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once: false });

  const offset = 50;

  const initialPositions: Record<string, string> = {
    up: `translateY(${offset}px)`,
    down: `translateY(${-offset}px)`,
    left: `translateX(${offset}px)`,
    right: `translateX(${-offset}px)`,
  };

  const hiddenTransform = slideIn ? initialPositions[direction] : "scale(0.7)";

  const visibleTransform = "translate(0,0) scale(1)";

  return (
    <div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay + index * stagger}s`,
        transitionTimingFunction: "ease-out",
        transform: inView ? visibleTransform : hiddenTransform,
        opacity: inView ? 1 : 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
