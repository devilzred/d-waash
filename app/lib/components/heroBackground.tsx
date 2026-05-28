'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type ImageConfig = {
  src: string;
  desktop: { top: string; left: string; w: number; h: number };
  mobile: { top: string; left: string; w: number; h: number };
  opacity: number;
  rotate: number;
  animDelay: number;
  animDuration: number;
};

const IMAGES: ImageConfig[] = [
  {
    src: '/images/comfine.png',
    desktop: { top: '12%', left: '74%', w: 145, h: 145 },
    mobile: { top: '10%', left: '65%', w: 85, h: 85 },
    opacity: 0.85,
    rotate: 8,
    animDelay: 0,
    animDuration: 18,
  },
  {
    src: '/images/comfine2.png',
    desktop: { top: '70%', left: '8%', w: 155, h: 155 },
    mobile: { top: '82%', left: '4%', w: 90, h: 90 },
    opacity: 0.85,
    rotate: -12,
    animDelay: 2,
    animDuration: 22,
  },
  {
    src: '/images/floorclean2.png',
    desktop: { top: '74%', left: '82%', w: 140, h: 140 },
    mobile: { top: '78%', left: '80%', w: 80, h: 80 },
    opacity: 0.85,
    rotate: 14,
    animDelay: 4,
    animDuration: 16,
  },
  {
    src: '/images/handwashfront.png',
    desktop: { top: '14%', left: '4%', w: 135, h: 135 },
    mobile: { top: '14%', left: '3%', w: 75, h: 75 },
    opacity: 0.85,
    rotate: -6,
    animDelay: 1,
    animDuration: 20,
  },
  {
    src: '/images/laudenryliquidfront.png',
    desktop: { top: '42%', left: '70%', w: 130, h: 130 },
    mobile: { top: '47%', left: '80%', w: 75, h: 75 },
    opacity: 0.85,
    rotate: -3,
    animDelay: 3,
    animDuration: 24,
  },
  {
    src: '/images/tolietcleanerfront.png',
    desktop: { top: '42%', left: '23%', w: 130, h: 130 },
    mobile: { top: '40%', left: '1%', w: 75, h: 75 },
    opacity: 0.85,
    rotate: -3,
    animDelay: 3,
    animDuration: 24,
  },
];

export default function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {IMAGES.map((img, i) => {
        const d = isMobile ? img.mobile : img.desktop;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: d.top,
              left: d.left,
              width: d.w,
              height: d.h,
              opacity: img.opacity,
              transform: `rotate(${img.rotate}deg)`,
              animation: `heroFloat ${img.animDuration}s ease-in-out ${img.animDelay}s infinite alternate`,
              willChange: 'transform',
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes={`${d.w}px`}
              className="object-contain"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
}
