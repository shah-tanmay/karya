import { useState } from "react";
import DoubleTickIcon from "remixicon-react/CheckDoubleLineIcon";

const Header = () => {
	const headerArray = [{ text: "Task Details" }, { text: "Activity" }];
	const [selected, setSelected] = useState<string>("Task Details");
	return (
		<div className="bg-secondary w-full h-12 rounded-tr-lg rounded-tl-lg p-2 cursor-pointer">
			<div className="flex justify-between mr-5">
				<div className="flex text-white gap-10 text-lg ml-5">
					{headerArray.map((item, idx) => {
						return (
							<div
								key={idx}
								className={`${
									selected === item.text ? "border-b-2 border-white" : ""
								}`}
								onClick={() => setSelected(item.text)}
							>
								{item.text}
							</div>
						);
					})}
				</div>
				<div className="flex gap-4">
					<div className="text-action flex gap-1 mt-1">
						<div>
							<DoubleTickIcon />
						</div>
						<div>Mark as done</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
