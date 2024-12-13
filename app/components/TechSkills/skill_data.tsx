interface SkillCategory {
	category: string
	skills: string[]
}

const languageSkills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "Golang (Go)",
    "SQL",
    "C#",
    "Rust",
    "Dart",
    "Lua",
    "Java",
    "PHP",
    "Solidity",
    "Shell (Bash, Zsh)",
	"PowerShell"
]

const frontendSkills = [
    "React",
    "Next.js",
    "SvelteKit",
	"Tailwind CSS",
	"Redux",
    "Unity",
	"NextUI",
    "Material UI",
    "DaisyUI",
    "CSS",
    "Flutter",
    "Shopify Liquid",
    "EJS",
    "Vite",
    "Astro"
]

const backendSkills = [
    "Node.js",
    "Relational Databases (PostgreSQL, SQL Server)",
    "NoSQL (MongoDB)",
    "Caching (Redis)",
    "Docker",
    "REST",
    "RPC",
    "GraphQL",
    "Express",
    "WebSockets",
    "Webhooks"
]

const infraSkills = [
    "AWS (S3, EC2, ECS, EKS, ECR, RDS, KMS, Lambda)",
    "Vercel",
    "Cloudflare",
    "Datadog",
    "Terraform",
    "Nginx",
    "Windows Server"
]

const otherSkills = [
    "Figma",
    "GitBook",
    "ReadMe",
    "Git",
    "Ethers.js",
    "web3.js",
    "IPFS",
    "Selenium",
    "Jest",
    "Puppeteer",
    "SendGrid",
    "Discord API",
    "Jira",
    "OOP"
]

export const skillList: SkillCategory[] = [
	{
		"category": "Languages",
		"skills": languageSkills,
	},
	{
		"category": "Frontend",
		"skills": frontendSkills,
	},
	{
		"category": "Backend",
		"skills": backendSkills,
	},
	{
		"category": "Infra",
		"skills": infraSkills,
	},
	{
		"category": "Other",
		"skills": otherSkills,
	},
]