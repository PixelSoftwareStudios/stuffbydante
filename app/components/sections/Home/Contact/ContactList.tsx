import { Snippet, Link } from "@nextui-org/react"
import Image from 'next/image';
import mailIcon from "@/assets/icons/mail_icon.svg";

export const ContactList = () => {
	return (
		<div className="ml-4">
			<span className="font-medium">
				Best way is through 
				<Link
					isExternal
					href="https://www.linkedin.com/in/dielpi/"
					className="ml-1"
				>
					Linkedin
				</Link>
			</span>
			<div>
				<p className="my-4">Or email me at:</p>
				<Snippet 
					symbol={
						<Image
							priority
							className="mr-2"
							src={mailIcon}
							alt="Email"
						/>
					}
					variant="bordered"
					classNames={{
						base: "select-none",
						pre: "flex items-center"
					}}
					codeString="dante@stuffbydante.net"
				>
					<span className="select-all">
						<span>d</span>
						<span>a</span>
						<span>n</span>
						<span>t</span>
						<span>e</span>
						<span>&#64;</span>
						<span>stuffbydante.net</span>
					</span>
				</Snippet>
			</div>
		</div>
	)
}
