"use client";

import GoatGroup from "../molecules/GoatGroup";
import Grass from "../atoms/Grass";

const Loader = () => (
  <div className="w-full h-full flex gap-6 justify-center relative">
    <Grass />
    <GoatGroup />
  </div>
);

export default Loader;
