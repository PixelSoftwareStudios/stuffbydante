import {
	Accordion,
	AccordionItem,
	Chip,
	Avatar,
} from "@nextui-org/react";

import { skillList } from "./skill_data";

export const TechSkillList = () => {
	// Search bar, "See if I have what you need"
	return (
		<Accordion
			variant="bordered"
			selectionMode="multiple"
			defaultExpandedKeys={["1", "2"]}
		>
			{skillList.map((item, i) => (
				<AccordionItem 
					key={i + 1}
					aria-label={item.category}
					title={item.category}
				>
					{item.skills.map((skill) => (
						<Chip
							key={skill.name}
							variant="flat"
							avatar={
								<Avatar 
									name={skill.name}
									style={{
										backgroundColor: skill.color
									}}
									getInitials={() => ""}
								/>
							}
							radius="lg"
							classNames={{
								base: "mr-2 mb-2",
								avatar: "w-3 h-3 ml-1",
								content: "select-all",
							}}
						>
							{skill.name}
						</Chip>
					))}
				</AccordionItem>
			))}
		</Accordion>
	)
}
