"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";

export default function ProductImage(props: ImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is passed via {...props}
    <Image
      {...props}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
