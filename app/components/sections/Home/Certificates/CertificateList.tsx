import { Card, CardBody } from "@nextui-org/react"

const certsList = [
	"Comptia A+",
	"Comptia B+",
	"Comptia C-",
	"Comptia D-",
	"Comptia F",
	"Comptia A+",
	"Comptia B+",
	"Comptia C-",
	"Comptia D-",
	"Comptia F",
]

export const CertificateList = () => {
	return (
		<Card>
			<CardBody className="flex-row flex-wrap gap-5">
				{certsList.map((cert, i) => (
					<span 
						key={i}
						className="text-nowrap"
					>
						{cert}
					</span>
				))}
			</CardBody>
		</Card>
		// <div className="flex gap-8 w-full justify-evenly bg-default-400">

		// </div>
	)
}
