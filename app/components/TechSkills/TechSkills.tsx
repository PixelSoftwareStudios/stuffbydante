import {
	Accordion,
	AccordionItem,
	Chip,
	Avatar,
} from "@nextui-org/react";

import { skillList } from "./skill_data";

export const TechSkills = () => {

	return (
		<Accordion variant="bordered" selectionMode="multiple" defaultExpandedKeys={["1", "2"]}>
			{skillList.map((item, i) => (
				<AccordionItem 
					key={i + 1}
					aria-label={item.category}
					title={item.category}
				>
					{item.skills.map((skillName, i) => (
						<Chip
							key={i}
							avatar={<Avatar name={skillName} src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />}
							variant="flat"
							classNames={{
								"base": "mr-2 mb-2",
								"avatar": "select-none",
							}}
						>
							{skillName}
						</Chip>
					))}
				</AccordionItem>
			))}
		</Accordion>
	)
}
