'use client';

import { title } from "@/components/primitives";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnandPIC } from "@/components/aboutPicture";

export default function AboutPage() {
	return (
		<div className="h-full w-full">
			<WavyBackground className="max-w h-full justify-start items-start align-top">
				<div className="flex flex-col gap-4 py-8 md:py-10 justify-center items-center">
					<div className="inline-block  ">
						<h1 className={title()}>About</h1>
						
					</div>
					<div className="flex flex-row items-start w-full mx-auto p-4 relative h-full">
					<div className="flex w-96 justify-start items-start">
						<AnandPIC />
					</div>
					<div className="flex-grow">
						<p>hello</p>
					</div>
					</div>

				</div>
			</WavyBackground>
		</div>
	);
}
