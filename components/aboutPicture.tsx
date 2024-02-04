"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export function AnandPIC() {
  const imageUrl =
    "/anand.png";
  return (
    <div className="h-full relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-4xl">Anandkumar NS</p>

      </DirectionAwareHover>
    </div>
  );
}
