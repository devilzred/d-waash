"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";

export default function ProductImage(props: ImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
