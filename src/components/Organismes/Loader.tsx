"use client";

import Simple from "../atoms/Containers/simple";
import GoatGroup from "../molecules/GoatGroup";
import Grass from "../atoms/Grass/Grass";

const Loader = () => (
  <Simple className="w-full h-full flex gap-6 justify-center relative">
    <Grass />
    <GoatGroup />
  </Simple>
);

export default Loader;
