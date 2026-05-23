'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type ImageConfig = {
  src: string;
  desktop: { top: string; left: string; w: number; h: number };
  mobile: { top: string; left: string; w: number; h: number };
  opacity: number;
  blurPx: number;
  rotate: number;
  animDelay: number;
  animDuration: number;
};

const FOREGROUND: ImageConfig[] = [
  {
    src: '/dashborad-images/image1.png',
    desktop: { top: '12%', left: '74%', w: 150, h: 150 },
    mobile: { top: '10%', left: '70%', w: 90, h: 90 },
    opacity: 0.65,
    blurPx: 0.8,
    rotate: 10,
    animDelay: 0,
    animDuration: 18,
  },
  {
    src: '/dashborad-images/image2.png',
    desktop: { top: '64%', left: '15%', w: 160, h: 160 },
    mobile: { top: '78%', left: '8%', w: 95, h: 95 },
    opacity: 0.65,
    blurPx: 0.8,
    rotate: -14,
    animDelay: 2,
    animDuration: 22,
  },
  {
    src: '/dashborad-images/image4.png',
    desktop: { top: '68%', left: '86%', w: 140, h: 140 },
    mobile: { top: '75%', left: '83%', w: 85, h: 85 },
    opacity: 0.65,
    blurPx: 0.7,
    rotate: 18,
    animDelay: 4,
    animDuration: 16,
  },
  {
    src: '/dashborad-images/image5.png',
    desktop: { top: '22%', left: '5%', w: 130, h: 130 },
    mobile: { top: '15%', left: '2%', w: 80, h: 80 },
    opacity: 0.65,
    blurPx: 0.6,
    rotate: -6,
    animDelay: 1,
    animDuration: 20,
  },
];

const BACKGROUND: ImageConfig[] = [
  {
    src: '/dashborad-images/image3.png',
    desktop: { top: '5%', left: '10%', w: 200, h: 200 },
    mobile: { top: '4%', left: '8%', w: 120, h: 120 },
    opacity: 0.5,
    blurPx: 8,
    rotate: 0,
    animDelay: 0,
    animDuration: 25,
  },
  {
    src: '/dashborad-images/image1.png',
    desktop: { top: '0%', left: '82%', w: 160, h: 160 },
    mobile: { top: '0%', left: '78%', w: 90, h: 90 },
    opacity: 0.12,
    blurPx: 6,
    rotate: 0,
    animDelay: 3,
    animDuration: 28,
  },
  {
    src: '/dashborad-images/image3.png',
    desktop: { top: '70%', left: '70%', w: 180, h: 180 },
    mobile: { top: '68%', left: '66%', w: 100, h: 100 },
    opacity: 0.2,
    blurPx: 5,
    rotate: 0,
    animDelay: 1,
    animDuration: 30,
  },
  {
    src: '/dashborad-images/image4.png',
    desktop: { top: '74%', left: '32%', w: 120, h: 120 },
    mobile: { top: '72%', left: '30%', w: 75, h: 75 },
    opacity: 0.5,
    blurPx: 7,
    rotate: 0,
    animDelay: 5,
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
      {/* Background layer — heavy blur, behind everything */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {BACKGROUND.map((img, i) => {
          const d = isMobile ? img.mobile : img.desktop;
          return (
            <div
              key={`bg-${i}`}
              className="absolute"
              style={{
                top: d.top,
                left: d.left,
                width: d.w,
                height: d.h,
                opacity: img.opacity,
                filter: `blur(${img.blurPx}px)`,
                mixBlendMode: 'soft-light',
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

      {/* Foreground layer — slight blur, above background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {FOREGROUND.map((img, i) => {
          const d = isMobile ? img.mobile : img.desktop;
          return (
            <div
              key={`fg-${i}`}
              className="absolute"
              style={{
                top: d.top,
                left: d.left,
                width: d.w,
                height: d.h,
                opacity: img.opacity,
                filter: img.blurPx > 0 ? `blur(${img.blurPx}px)` : undefined,
                mixBlendMode: 'screen',
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
    </div>
  );
}
