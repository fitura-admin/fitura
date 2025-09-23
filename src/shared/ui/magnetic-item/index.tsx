"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMagneticItem } from "./hook/useMagneticItem.hook";

import classes from "./magnetic-item.module.scss";

interface MagneticItemProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  areaSize?: number;
}

export const MagneticItem: React.FC<MagneticItemProps> = ({
  children,
  strength = 0.2,
  className = "",
  areaSize = 100,
}) => {
  const { springX, springY, containerRef } = useMagneticItem({
    maxDistance: areaSize,
    strength,
  });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={`${className} relative`}
    >
      <div
        ref={containerRef}
        className={classes.area}
        style={{
          width: `calc(100% + ${areaSize}px)`,
          height: `calc(100% + ${areaSize}px)`,
        }}
      ></div>
      <div className={classes.children}>{children}</div>
    </motion.div>
  );
};
