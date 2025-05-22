"use client";
import "./";
import ImageGoat from "../atoms/Goat/ImageGoat";

const GoatGroup = () => (
  <>
    <ImageGoat />
    <ImageGoat delay="delay-animation-1" />
    <ImageGoat delay="delay-animation-2" />
  </>
);

export default GoatGroup;
