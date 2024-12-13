import { ArrowIcon } from '@/assets/icons/ArrowIcon'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
} from "@nextui-org/react";

import NextLink from 'next/link'

const navItems = {
	'/': {
		name: 'Home',
	},
	'/about': {
		name: 'About',
	},
	'/projects': {
		name: 'Projects',
	},
}

// projects 
// -> tools
// -> games

export function Header() {
	return (
		<aside className="mb-16 tracking-tight select-none">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
					id="nav"
				>
					<div className="flex flex-row space-x-0 mr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-200 flex align-middle py-2 pr-2 mr-8"
								>
									{name}
								</Link>
							)
						})}
					</div>
					<ul className="font-sm mt-2 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
						<li>
							<a
								className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/PixelSoftwareStudios"
							>
								<ArrowIcon />
								<p className="ml-2 h-7">GitHub</p>
							</a>
						</li>
						<li>
							<a
								className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/frostbournesb"
							>
								<ArrowIcon />
								<p className="ml-2 h-7">Other GitHub</p>
							</a>
						</li>
						<li>
							<a
								className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/dielpi/"
							>
								<ArrowIcon />
								<p className="ml-2 h-7">LinkedIn</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
		// <Navbar />
	)
}
