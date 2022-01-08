import ArrowLeftCircle from "remixicon-react/ArrowLeftCircleFillIcon";

const CompletedTasks = () => {
	const timeLineArray = [
		{ text: "All Time", total: 33 },
		{ text: "This Week", total: 7 },
		{ text: "Today", total: 0 },
	];
	const demoTasksArray = [
		{
			date: "Jan 4,2022",
			taskList: [
				{ text: "TOC", type: "Personal" },
				{ text: "NetCom", type: "Personal" },
				{ text: "TOC", type: "Personal" },
				{ text: "Create Resume for GSOC", type: "Personal" },
				{ text: "Make Skeletal for Pages", type: "Work" },
				{ text: "Insta", type: "Work" },
			],
		},
		{
			date: "Jan 2,2022",
			taskList: [{ text: "google business", type: "Work" }],
		},
	];
	return (
		<div className="mt-16 ml-2">
			<div className="flex gap-12">
				{timeLineArray.map((item, idx) => {
					return (
						<div key={idx}>
							<div className="text-grey font-medium">{item.text}</div>
							<div className="text-white font-semibold text-xl">
								{item.total}
							</div>
						</div>
					);
				})}
			</div>
			<div className="w-full mt-4 flex flex-start">
				<input
					type="text"
					placeholder="Search for tasks.."
					className="bg-secondary w-11/12 px-4 py-2 rounded-3xl"
				/>
			</div>
			<div className="mt-4">
				{demoTasksArray.map((item, idx) => {
					return (
						<div key={idx}>
							<div className="text-white font-bold text-base ">{item.date}</div>
							<div>
								{item.taskList.map((list, _idx) => {
									return (
										<div
											key={_idx}
											className="flex justify-between py-2 text-grey"
										>
											<div className="flex gap-2 ">
												<div>
													<ArrowLeftCircle />
												</div>
												<div>{list.text}</div>
											</div>
											<div className="font-thin">{list.type}</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CompletedTasks;
