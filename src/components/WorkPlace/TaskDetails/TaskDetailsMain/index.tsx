import React, { useState } from "react";
import AddTag from "../../../AddTag";
import ChipCard from "../../../ChipCard";
import CustomInput from "../../../CustomInput";
import Heading from "../../../Heading";
import TaskChip from "../../Tasks/TaskChip";
import Calender from "../Calender";

const TaskDetailsMain = () => {
	type Icon = "calender" | "mug" | "sun" | "sync";
	const [showPopup, setShowPopup] = useState<JSX.Element | null>(null);
	const closeModal = () => {
		setShowPopup(null);
	};
	const timerArray = [
		{
			text: "Set Time",
			icon: "calender",
			onClick: <Calender closeModal={closeModal} />,
		},
		{ text: "Tommorow, 9am", icon: "mug", onClick: null },
		{ text: "Next Week", icon: "sun", onClick: null },
		{ text: "Daily,weekly,etc...", icon: "sync", onClick: null },
	];
	return (
		<React.Fragment>
			<div className="px-4 mt-2">
				<div>
					<CustomInput
						defaultValue="google business"
						fontSize={25}
						className="text-grey"
					/>
				</div>
				<AddTag className="mt-4" />
				<Heading text="Remind me" className="mt-4" />
				<div className="grid grid-cols-2 gap-2 mt-2">
					{timerArray.map((item, idx) => {
						return (
							<div
								className="w-full gap-5"
								key={idx}
								onClick={() => setShowPopup(item.onClick)}
							>
								<ChipCard
									icon={item.icon as Icon}
									text={item.text}
									className="w-full whitespace-nowrap"
								/>
							</div>
						);
					})}
				</div>
				<div className="grid grid-cols-2 gap-2 pr-10">
					<div>
						<Heading text="List" />
						<ChipCard type="secondary" text="Work" className="mt-2" />
					</div>
					<div>
						<Heading text="Owner" />
						<ChipCard
							type="secondary"
							text="Me"
							className="mt-2"
							name="Tanmay Shah"
						/>
					</div>
				</div>
				<Heading text="SubTasks" className="mt-2" />
				<TaskChip text="" workType="" />
				<Heading text="Notes" className="mt-4" />
				<CustomInput
					placeholder="Insert Your Notes here"
					fontSize={14}
					className="mt-2"
				/>
				<Heading text="attachments" className="mt-4" />
				<div className="border-2 border-dotted border-white text-grey text-sm flex justify-center p-2 rounded-lg mt-2 cursor-pointer hover:text-action hover:border-action">
					<div className="m-auto">Click to add/drop your files</div>
				</div>
				<Heading text="created" className="mt-4" />
				<div className="mt-2 text-grey text-sm ml-1">Jan 01,2022</div>
				<div className="mt-5 flex justify-center text-danger cursor-pointer hover:bg-opacity-40 ">
					Delete task
				</div>
			</div>
			{showPopup ? showPopup : null}
		</React.Fragment>
	);
};

export default TaskDetailsMain;
