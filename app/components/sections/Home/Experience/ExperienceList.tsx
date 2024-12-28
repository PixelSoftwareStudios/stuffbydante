import { Card, CardBody } from "@nextui-org/react"
import { resume } from "./career_data"
import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
	return (
		<Card className="border-divider border-2 bg-black">
			<CardBody className="p-0">
				<ul className="pl-10 pr-8 py-4">
					{resume.map((entry, i) => (
						<ExperienceCard key={i} experience={entry} />
					))}
				</ul>
			</CardBody>
		</Card>
	)
}
