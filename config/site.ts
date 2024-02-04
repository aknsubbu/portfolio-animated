export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Anandkumar NS",
	description: "I am a passionate developer who loves to code and build things that matter.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Me",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Me",
      href: "/contact",
    }
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
