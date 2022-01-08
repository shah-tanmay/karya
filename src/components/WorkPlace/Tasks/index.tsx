import Container from "../../Container";
import TaskChip from "./TaskChip";
import ArrowUpIcon from "remixicon-react/ArrowUpLineIcon";
import { useState } from "react";
import FocusedDiv from "./FocusedDiv";

const Tasks = () => {
	const [focus, setFocus] = useState<boolean>(false);
	const demoTaskArray = [
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
		{ text: "google business", workType: "Work" },
	];
	return (
		<Container className="rounded-lg">
			<div style={{ height: "400px" }} className="overflow-auto p-4">
				<div className="text-white font-bold text-lg">Today</div>
				<div className="flex flex-col gap-2 line-throug">
					{demoTaskArray.map((item, idx) => {
						return (
							<TaskChip text={item.text} workType={item.workType} key={idx} />
						);
					})}
				</div>
			</div>
			{focus ? <FocusedDiv /> : null}
			<div className="flex bg-tertiary p-2 py-3 rounded-br-lg rounded-bl-lg gap-2">
				<div className="w-11/12">
					<input
						type="text"
						placeholder="Click to quickly add task"
						className="bg-secondary w-full px-5 py-1 rounded-2xl outline-none text-white font-semibold"
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
					/>
				</div>
				<div
					className={`bg-secondary p-1 rounded-full  hover:bg-action hover:text-white cursor-pointer ${
						focus ? "bg-action text-white" : "text-grey"
					}`}
				>
					<ArrowUpIcon />
				</div>
			</div>
		</Container>
	);
};

export default Tasks;
