import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

import { useState } from "react";

type Props = {
    question: string, 
    answer: string
}

const Accordian = ({question, answer}: Props) => {
	const [accordianOpen, setAccordianOpen] = useState<boolean>(false);

	return (
		<>
			<div className="overflow-clip accordian-item">
				<button
					className="flex items-center justify-between w-full py-1 font-work-sans-semi-bold"
					onClick={() => setAccordianOpen(!accordianOpen)}
				>
					{question}
					{accordianOpen ? (
						<img src={iconMinus} alt="" />
					) : (
						<img src={iconPlus} alt="" />
					)}
				</button>
				<div
					className={`grid overflow-hidden ${
						accordianOpen
							? "grid-rows-[1fr]"
							: "grid-rows-[0fr]"
					}`}
				>
					<p className={"font-work-sans-regular overflow-hidden"}>
						{answer}
					</p>
				</div>
			</div>
		</>
	);
};

export default Accordian;
