"use client";

import Image from "next/image";
import Simple from "../Containers/simple";
import "./Goat.style.css";

type DelayOptions = "" | "delay-animation-1" | "delay-animation-2";

const ImageGoat = ({ delay = "" }: { delay?: DelayOptions }) => (
  <Simple className={`relative w-32 h-32 animate-goat-eat ${delay}`}>
    <Image
      src="/asset/goat-loader.svg"
      alt="Chèvre mangeant"
      fill
      className="object-contain"
      priority
    />
  </Simple>
);

export default ImageGoat;
