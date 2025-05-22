"use client";
import Image from "next/image";

const ImageGoat = ({ delay = "" }: { delay?: string }) => (
  <div className={`relative w-32 h-32 animate-goat-eat ${delay}`}>
    <Image
      src="/asset/goat-loader.svg"
      alt="Chèvre mangeant"
      fill
      className="object-contain"
      priority
    />
  </div>
);

export default ImageGoat;
