export interface ResumeEntry {
	company: string;
	title: string;
	startDate: string;
	endDate: string;
	bullets: string[];
}

export const resume: ResumeEntry[] = [
	{
		company: "SERA",
		title: "Software Engineer",
		startDate: "Nov. 2024",
		endDate: "Present",
		bullets: [
			"Develop landing page and core web app using React, Next.js, Tailwind CSS, React Router, TypeScript, Redux Toolkit, NextUI, Stripe.js, and Google Maps API",
			"Develop backend API using Golang, PostgreSQL, Redis, Docker, Stripe API, and Plaid API",
			"Collaborate with design team to ensure designs meet product vision"
		]
	},
	{
		company: "Sheet Music Now, Inc.",
		title: "Software Engineer",
		startDate: "Apr. 2024",
		endDate: "Nov. 2024",
		bullets: [
			"Utilized Python, MSSQL, AWS, and Shopify Liquid to maintain codebase and add new features",
			"Developed a script to automate custom ePub generation and publishing using Python and Selenium, enabling distribution of 200,000 titles on Amazon Kindle Direct Publishing (KDP)",
		]
	},
	{
		company: "String Technology, Inc.",
		title: "Software Engineer",
		startDate: "Jul. 2022",
		endDate: "Sept. 2023",
		bullets: [
			"Collaborated with 5 engineers to build a fiat-to-crypto onramp that allowed users to buy digital goods with their credit card with minimal user friction while ensuring PCI compliance and fraud prevention",
			"Led the architecture and development of all frontend projects using SvelteKit, TypeScript, JavaScript, DaisyUI, and Tailwind CSS, including the core checkout app, the web SDK, developer dashboard, and product demos",
			"Architected and maintained frontend build processes using Vite, Rollup.js, Tsup, and Python",
			"Worked alongside 3 backend engineers to complete several features in the backend using Golang, Node.js, PostgreSQL, Docker, Redis, Terraform, as well as C# for the Unity SDK",
			"Authored and maintained developer-focused technical documentation and walkthroughs for our products on ReadMe, which was leveraged by the sales team to attain 3 letters of intent from customers",
			"Directed and collaborated with 2 UI/UX designers to iteratively improve product designs in Figma"
		]
	},
	{
		company: "Snowball Finance",
		title: "Software Engineer",
		startDate: "Jun. 2021",
		endDate: "Dec. 2021",
		bullets: [
			"Collaborated with a decentralized team of experienced engineers to develop the first yield aggregator on the Avalanche blockchain, achieving over $200M TVL with over 40k users, generating $150k+ in weekly revenue with a $60M+ market cap",
			"Developed core frontend in React.js using Next.js, GraphQL, Node.js, MUI, web3.js, and Ethers.js",
			"Developed initial homepage in SvelteKit, before moving development to WebFlow",
			"Proactively identified, raised to the team, and resolved issues in the codebase and UI design",
			"Provided troubleshooting and support for our user community on Discord"
		]
	},
	{
		company: "Simple Studios",
		title: "Co-Founder / Developer",
		startDate: "Aug. 2018",
		endDate: "Jan. 2021",
		bullets: [
			"Co-created a critically acclaimed video game on the Roblox platform in Lua, gaining over 14M users",
			"Architected a full-stack website using Nginx and Node.js/Express and HTML templating with EJS",
			"Administered a Windows 10 Datacenter server using RDP and Server Manager",
			"Managed a Discord server with over 3000 members and led a team of ~10 moderators",
			"Developed Discord bot applications in Python using Discord.py and MongoDB"
		]
	},
	{
		company: "Arkius PBC (The Values Movement)",
		title: "Backend Developer Intern",
		startDate: "Jul. 2020",
		endDate: "Aug. 2020",
		bullets: [
			"Worked with a senior developer creating API endpoints in Golang",
			"Learned production code quality standards and refactored the codebase for better modularity"
		]
	}
];
