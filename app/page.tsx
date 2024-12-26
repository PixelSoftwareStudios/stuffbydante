"use client";

import { Divider } from "@nextui-org/react";
import {
	TechSkillList,
	CertificateList,
	ExperienceList,
	ProjectList,
	ContactList,
} from "./components/sections/Home";

export default function Page() {
	return (
		<>
		<section className="pt-10">
			<h1 className="mb-8 text-3xl font-semibold">
				Dante Ielpi
			</h1>
			<p className="mb-4">
				Dante Ielpi is a <b>Full Stack Engineer</b> with <b>4 years of professional experience</b> across various industries, including fintech, web3, gaming, and e-commerce. Throughout his career at greenfield startups and established companies, he has worn many hats but has primarily focused on frontend development. Dante Ielpi has been responsible for fully architecting and developing clean, robust, and optimized frontend systems, as well as directing designers to bring unified visions to life. 
			</p>
			<p className="mb-4">
				A dedicated and persistent problem solver with a strong sense of ownership, he brings a product-focused mindset, a passion for quality assurance, and meticulous attention to detail to every project, ensuring an optimal user experience.
			</p>
			<p className="mb-8">
				Currently, he is a Full Stack Engineer at an [undisclosed as of now] early-stage startup, building scalable web applications using React (Next.js), TypeScript, and Go.<br />On the side, he operates as a Freelance Web Developer and Consultant, delivering high-performance, custom-tailored web solutions such as portfolio websites and e-commerce platforms to local businesses and individual clients.
			</p>
		</section>
		<div>
			<Divider />
			{/* <h1 className="text-3xl font-semibold mt-10 mb-8 scroll-mt-24" id="projectsummary">
				<a href="#projectsummary">Projects</a>
			</h1>
			<ProjectList /> */}
			<h1 className="text-3xl font-semibold mt-10 mb-8 scroll-mt-24" id="skills">
				<a href="#skills">Skills</a>
			</h1>
			<TechSkillList />
			{/* <h1 className="text-3xl font-semibold mt-10 mb-8" id="certs">Certificates:</h1>}
			<CertificateList /> */}
			{/* <h1 className="text-3xl font-semibold mt-10 mb-8" id="experience">
				<a href="#experience">Experience</a>
			</h1>
			<ExperienceList /> */}
			<h1 className="text-3xl font-semibold mt-10 mb-8" id="contact">
				<a href="#contact">Contact</a>
			</h1>
			<ContactList />
			{/* 
				Certificates (Small form factor horizontal scrollable  list)
				Experience
				Projects (major ones) Card with See More button that navigates to /projects
				Contact with text saying Best way is through Linkedin, but also show email "Or mail me at dante@stuffbydante.net" Snippet
			*/}
		</div>
		</>
	)
}
