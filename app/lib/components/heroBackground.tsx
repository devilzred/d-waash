'use client';

import Image from 'next/image';

const FOREGROUND = [
  {
    src: '/dashborad-images/image1.png',
    top: '12%',
    left: '74%',
    w: 150,
    h: 150,
    opacity: 0.65,
    blurPx: 0.8,
    rotate: 10,
    animDelay: 0,
    animDuration: 18,
  },
  {
    src: '/dashborad-images/image2.png',
    top: '64%',
    left: '15%',
    w: 160,
    h: 160,
    opacity: 0.65,
    blurPx: 0.8,
    rotate: -14,
    animDelay: 2,
    animDuration: 22,
  },
  {
    src: '/dashborad-images/image4.png',
    top: '68%',
    left: '86%',
    w: 140,
    h: 140,
    opacity: 0.65,
    blurPx: 0.7,
    rotate: 18,
    animDelay: 4,
    animDuration: 16,
  },
  {
    src: '/dashborad-images/image5.png',
    top: '22%',
    left: '5%',
    w: 130,
    h: 130,
    opacity: 0.65,
    blurPx: 0.6,
    rotate: -6,
    animDelay: 1,
    animDuration: 20,
  },
];

const BACKGROUND = [
  {
    src: '/dashborad-images/image3.png',
    top: '5%',
    left: '10%',
    w: 200,
    h: 200,
    opacity: 0.5,
    blurPx: 8,
    rotate: 0,
    animDelay: 0,
    animDuration: 25,
  },
  {
    src: '/dashborad-images/image1.png',
    top: '0%',
    left: '82%',
    w: 160,
    h: 160,
    opacity: 0.12,
    blurPx: 6,
    rotate: 0,
    animDelay: 3,
    animDuration: 28,
  },
  {
    src: '/dashborad-images/image3.png',
    top: '70%',
    left: '70%',
    w: 180,
    h: 180,
    opacity: 0.2,
    blurPx: 5,
    rotate: 0,
    animDelay: 1,
    animDuration: 30,
  },
  {
    src: '/dashborad-images/image4.png',
    top: '74%',
    left: '32%',
    w: 120,
    h: 120,
    opacity: 0.5,
    blurPx: 7,
    rotate: 0,
    animDelay: 5,
    animDuration: 24,
  },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Background layer — heavy blur, behind everything */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {BACKGROUND.map((img, i) => (
          <div
            key={`bg-${i}`}
            className="absolute"
            style={{
              top: img.top,
              left: img.left,
              width: img.w,
              height: img.h,
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
              sizes={`${img.w}px`}
              className="object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Foreground layer — slight blur, above background */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {FOREGROUND.map((img, i) => (
          <div
            key={`fg-${i}`}
            className="absolute"
            style={{
              top: img.top,
              left: img.left,
              width: img.w,
              height: img.h,
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
              sizes={`${img.w}px`}
              className="object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
