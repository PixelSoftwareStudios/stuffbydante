"use client";

import { Divider } from "@nextui-org/react";
import { TechSkills } from "./components/TechSkills";

export default function Page() {
	return (
		<>
		<section>
			<h1 className="mb-8 text-3xl font-semibold">
				Dante Ielpi
			</h1>
			<p className="mb-4">
				Dante Ielpi is a Full Stack engineer with 4 years of professional experience across various industries, including fintech, web3, gaming, and e-commerce. Throughout his career at greenfield startups and established companies, he has worn many hats but has primarily focused on frontend development. Dante Ielpi has been responsible for fully architecting and developing clean, robust, and optimized frontend systems, as well as directing designers to bring unified visions to life. 
			</p>
			<p className="mb-4">
				A dedicated and persistent problem solver with a strong sense of ownership, he brings a product-focused mindset, a passion for quality assurance, and meticulous attention to detail to every project, ensuring an optimal user experience.
			</p>
			<p className="mb-4">
				Currently he works at a [undisclosed as of now] startup as a Full Stack engineer, mainly utilizing React (Next.js), TypeScript, and Go. On the side, he works as a Freelance Web Developer and Consultant, providing his web design and development services to local clients.
			</p>
		</section>
		<div>
			<Divider />
			<h1 className="text-3xl font-semibold my-8">Skills:</h1>
			<TechSkills />
		</div>
		</>
	)
}
