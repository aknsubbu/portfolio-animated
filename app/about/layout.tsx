export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col  w-full items-center justify-center gap-2 py-5 md:py-2">
			<div className="inline-block   w-full justify-center">
				{children}
			</div>
		</section>
	);
}
