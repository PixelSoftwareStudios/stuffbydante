interface SkillCategory {
	category: string
	skills: SkillDisplay[]
}

interface SkillDisplay {
	name: string
	color: string
}

const languageSkills: SkillDisplay[] = [
	{ name: "Python", color: "#306998" },
	{ name: "TypeScript", color: "#3178C6" },
	{ name: "JavaScript", color: "#F7DF1E" },
	{ name: "Golang (Go)", color: "#00ADD8" },
	{ name: "SQL", color: "#336791" },
	{ name: "C#", color: "#239120" },
	{ name: "Rust", color: "#DEA584" },
	{ name: "Dart", color: "#0175C2" },
	{ name: "Lua", color: "#000080" },
	{ name: "Java", color: "#5382A1" },
	{ name: "PHP", color: "#777BB4" },
	{ name: "Solidity", color: "#363636" },
	{ name: "Shell (Bash, Zsh)", color: "#4EAA25" }
]

const frontendSkills: SkillDisplay[] = [
	{ name: "React", color: "#61DAFB" },
	{ name: "Next.js", color: "#000000" },
	{ name: "SvelteKit", color: "#FF3E00" },
	{ name: "Tailwind CSS", color: "#38B2AC" },
	{ name: "Redux Toolkit", color: "#764ABC" },
	{ name: "Material UI", color: "#007FFF" },
	{ name: "NextUI", color: "#0072F5" },
	{ name: "DaisyUI", color: "#5A4AD1" },
	{ name: "CSS", color: "#2965F1" },
	{ name: "Unity", color: "#000000" },
	{ name: "Flutter", color: "#02569B" },
	{ name: "Shopify Liquid", color: "#95BF47" },
	{ name: "EJS", color: "#A91E50" },
	{ name: "Astro", color: "#FF5D01" },
	{ name: "React Router", color: "#e15156" },
	{ name: "Vite", color: "#646CFF" },
	{ name: "Stripe.js", color: "#625bf6" },
	{ name: "Google Maps API", color: "#34A853" }
]

const backendSkills: SkillDisplay[] = [
	{ name: "Node.js", color: "#339933" },
	{ name: "Relational Databases (PostgreSQL, SQL Server)", color: "#336791" },
	{ name: "NoSQL (MongoDB)", color: "#47A248" },
	{ name: "Caching (Redis)", color: "#DC382D" },
	{ name: "Docker", color: "#2496ED" },
	{ name: "REST", color: "#E41E26" },
	{ name: "RPC", color: "#00B4D8" },
	{ name: "GraphQL", color: "#E10098" },
	{ name: "Express", color: "#000000" },
	{ name: "WebSockets", color: "#8E44AD" },
	{ name: "Webhooks", color: "#5B6D88" }
]

const infraSkills: SkillDisplay[] = [
	{ name: "AWS (S3, EC2, ECS, EKS, ECR, RDS, KMS, Lambda)", color: "#FF9900" },
	{ name: "Vercel", color: "#000000" },
	{ name: "Cloudflare", color: "#F38020" },
	{ name: "Datadog", color: "#632CA6" },
	{ name: "Terraform", color: "#623CE4" },
	{ name: "Nginx", color: "#009639" },
	{ name: "Windows Server", color: "#00BCF2" }
]

const otherSkills: SkillDisplay[] = [
	{ name: "Figma", color: "#F24E1E" },
	{ name: "GitBook", color: "#3884FF" },
	{ name: "ReadMe", color: "#009FE4" },
	{ name: "Git", color: "#F05032" },
	{ name: "Ethers.js", color: "#FF6C37" },
	{ name: "web3.js", color: "#F16822" },
	{ name: "IPFS", color: "#65C2CB" },
	{ name: "Selenium", color: "#43B02A" },
	{ name: "Jest", color: "#C21325" },
	{ name: "Puppeteer", color: "#40B5A4" },
	{ name: "SendGrid", color: "#00B2EE" },
	{ name: "Discord API", color: "#5865F2" },
	{ name: "Jira", color: "#0052CC" },
	{ name: "OOP", color: "#A9A9A9" }
]

export const skillList: SkillCategory[] = [
	{
		category: "Languages",
		skills: languageSkills,
	},
	{
		category: "Frontend",
		skills: frontendSkills,
	},
	{
		category: "Backend",
		skills: backendSkills,
	},
	{
		category: "Infra",
		skills: infraSkills,
	},
	{
		category: "Other",
		skills: otherSkills,
	},
]