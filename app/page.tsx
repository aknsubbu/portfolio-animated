'use client';

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypeWriterComponent } from "@/components/TypeWriterComponent";


export default function Home() {
	return (
<BackgroundGradientAnimation>
		<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold  pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <TypeWriterComponent />
        </div>
      	</div>
</BackgroundGradientAnimation>
	);
}
