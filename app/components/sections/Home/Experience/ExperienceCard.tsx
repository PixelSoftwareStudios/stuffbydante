import type { ResumeEntry } from "./career_data"

interface ExperienceCardProps {
	experience: ResumeEntry;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const { company, title, startDate, endDate, bullets } = experience;

	return (
		<li className="relative py-4">
			<div className="flex flex-1 flex-col justify-start gap-1">
				<time className="text-xs text-[#CCC] select-all">
					<span>{`${startDate} – ${endDate}`}</span>
				</time>
				<h2 className="font-semibold leading-none select-all">{company}</h2>
				<p className="text-sm select-all">{title}</p>
				<ul className="ml-4 list-outside list-disc">
					{bullets.map((bullet, i) => (
						<li key={i} className="prose prose-invert text-sm">
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}
