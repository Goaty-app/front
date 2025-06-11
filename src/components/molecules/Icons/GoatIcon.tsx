"use client";

import React from "react";
import "./icon.css";
import { Link } from "@/components/atoms";
import { GiGoat } from "react-icons/gi";

const GoatIcon: React.FC = () => {
  return (
    <Link
      href="/"
      className="cursor-pointer app-icon rounded-4xl overflow-hidden p-2"
    >
      <GiGoat className="w-6 h-6" />
    </Link>
  );
};

export default GoatIcon;
