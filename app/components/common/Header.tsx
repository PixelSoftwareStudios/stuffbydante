import { ArrowIcon } from '@/assets/icons/ArrowIcon';
import {
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
} from "@nextui-org/react";

import { ReactNode } from 'react';

interface NavRoute {
	name: string
	path: string
}

interface SocialLink {
	name: string
	link: string
	icon?: ReactNode
}

const navRoutes: NavRoute[] = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'About',
		path: '/about'
	},
	{
		name: 'Projects',
		path: '/projects'
	},
]

const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		link: "https://github.com/PixelSoftwareStudios",
	},
	{
		name: "Other GitHub",
		link: "https://github.com/frostbournesb",
	},
	{
		name: "Linkedin",
		link: "https://www.linkedin.com/in/dielpi/",
	},
]

// https://nextui.org/docs/components/navbar#with-dropdown-menu
// projects 
// -> tools
// -> games

export const Header = () => {
	return (
		<Navbar
			isBordered
			isBlurred={false}
			disableAnimation
			classNames={{
				wrapper: "px-0",
				menu: "h-fit border-b-1 pb-10"
			}}
		>
			<NavbarMenuToggle className="sm:hidden" />
			<NavbarContent className="hidden sm:flex gap-5">
				{navRoutes.map((route, i) => (
					<NavbarItem key={i}>
						<Link
							href={route.path}
							className={`p-2 text-white ${i == 0 && 'pl-0'}`}
						>
							{route.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent className="gap-2" justify="end">
				{socialLinks.map((social, i) => (
					<NavbarItem key={i}>
						<Link
							isExternal
							href={social.link}
							className="flex gap-2 p-1 pr-0 items-center text-white"
						>
							{
								social.icon || <ArrowIcon />
							}
							{social.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarMenu>
				{navRoutes.map((route, i) => (
					<NavbarMenuItem key={`${route.name}-${i}`}>
						<Link
							className="w-full text-white"
							href={route.path}
							size="lg"
						>
							{route.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}
