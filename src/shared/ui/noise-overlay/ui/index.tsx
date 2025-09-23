"use client";
import { useNoise } from "../hook/useNoise.hook";

interface NoiseOverlayProps {
  opacity?: number;
  fps?: number;
  scale?: number;
  mono?: boolean;
}

export default function NoiseOverlay({
  opacity = 0.09,
  fps = 24,
  scale = 3,
  mono = false,
}: NoiseOverlayProps) {
  const canvasRef = useNoise({ opacity, fps, scale, mono });

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        mixBlendMode: "soft-light",
        opacity,
        zIndex: 9999,
        imageRendering: "pixelated",
      }}
    />
  );
}
