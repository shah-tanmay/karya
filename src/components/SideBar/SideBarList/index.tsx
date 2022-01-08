import ArrowDown from "remixicon-react/ArrowDownSLineIcon";
import ArrowUp from "remixicon-react/ArrowUpSLineIcon";
import EditIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddFillIcon";
import { useState } from "react";
import ExpandableList from "./ExpandableList";

const SideBarIcons = () => {
	return (
		<div className="flex text-grey gap-2 ">
			<div className="hover:bg-hover rounded-full p-1">
				<EditIcon />
			</div>
			<div className="hover:bg-hover rounded-full p-1">
				<AddIcon />
			</div>
		</div>
	);
};

const SideBarList = () => {
	const list = [
		{ text: "Calender", expandableList: [], icons: false },
		{
			text: "Shortcuts",
			expandableList: ["Today", "Next 7 Days", "All Tasks"],
			icons: false,
		},
		{
			text: "Lists",
			expandableList: ["Personal", "Work", "Grocery"],
			icons: true,
		},
		{ text: "Tags", expandableList: ["Priority"], icons: true },
	];
	const [listState, setListState] = useState<string>("Calender");
	const [activeStateArray, setActiveStateArray] = useState<string[]>([
		"Calender",
	]);
	return (
		<div className="flex flex-col gap-10 mt-10">
			{list.map((item, idx) => {
				return (
					<div
						key={idx}
						className={`text-xl font-bold text-white flex`}
						onClick={() => {
							setListState(item.text);
							if (!activeStateArray.includes(item.text)) {
								setActiveStateArray((prevState) => [...prevState, item.text]);
							} else {
								setActiveStateArray((prevState) =>
									prevState.filter((listItem) => listItem !== item.text),
								);
							}
						}}
					>
						<div className="flex justify-between w-full pr-10 cursor-pointer">
							<div className="flex gap-2">
								<div>
									<div>{item.text}</div>
									<div>
										{activeStateArray.includes(item.text) &&
											item.expandableList && (
												<ExpandableList list={item.expandableList} />
											)}
									</div>
								</div>
								{item.expandableList?.length > 0 ? (
									<div
										className={`mt-1 ml-2 rounded-full hover:bg-hover h-6 ${
											listState === item.text ? "text-action" : "text-grey"
										}`}
									>
										{activeStateArray.includes(item.text) ? (
											<ArrowUp />
										) : (
											<ArrowDown />
										)}
									</div>
								) : null}
							</div>
							<div>
								{activeStateArray.includes(item.text) && item.icons ? (
									<div className="mt-1 ml-5">
										<SideBarIcons />
									</div>
								) : null}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SideBarList;
