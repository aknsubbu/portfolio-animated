"use client";
import React from "react";
import SparklesCore from "../components/ui/sparkles";

export function AboutDescription() {
  return (
    <div className=" m-10 h-[50rem] w-[50rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-xl text-xl lg:text-xl font-bold text-center text-white relative z-20">
       
            Hello, I&apos;m <span className="text-red-500">Anandkumar NS</span>, a passionate Computer Science
            engineer based in Chennai. &nbsp;I have a deep fascination for
            exploring new technologies and tools that shape our ever-evolving
            digital landscape. I firmly believe in the adage that the only
            constant in the world is change, and I embrace it wholeheartedly.
            <br /> Having recognized the prominent role of computers in
            today&apos;s modern world, I find great joy in delving into the
            intricacies of this fascinating field. By continuously expanding
            my knowledge and skills, I strive to stay ahead of the curve and
            prepare myself for the future. &nbsp; Throughout my journey, I
            have enjoyed immersing myself in various aspects of computer
            science, including software development, system architecture, and
            emerging technologies. This diverse exposure has not only
            broadened my understanding but also fueled my curiosity to explore
            further. <br /> With a solid foundation in computer science and an
            insatiable thirst for learning, I am committed to leveraging
            technology to drive innovation and make a meaningful impact. I am
            excited about the endless possibilities that lie ahead and look
            forward to collaborating with like-minded individuals and
            organizations on exciting projects. Thank you for visiting my
            portfolio, and I invite you to join me on this exhilarating
            journey of exploration and growth.
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}




