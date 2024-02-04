"use client";

import {TypewriterEffectSmooth} from "@/components/ui/Typewriter-effect";

export function TypeWriterComponent() {
    const words = [
      {
        text: "Hi,",
      },
      {
        text: " I'm",
      },
      {
        text: "Anandkumar NS...",
        className: "text-gray-100 dark:text-gray-100",
      },
 
    ];
    const words2 = [
      {
        text: "A",
      },
      {
        text: " Developer from",
      },
      {
        text: "Chennai, India",
        className: "text-gray-100 dark:text-gray-100",
      },
 
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <TypewriterEffectSmooth words={words} />
        <TypewriterEffectSmooth words={words2} />
      </div>
    );
  }