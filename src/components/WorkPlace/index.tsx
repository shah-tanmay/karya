import React from "react";
import TopMenu from "./Settings/TopMenu";
import TaskWorkPlace from "./TaskWorkPlace";

const WorkPlace = () => {
	return (
		<React.Fragment>
			<div className="text-white flex justify-between">
				<TopMenu />
			</div>
			<TaskWorkPlace />
		</React.Fragment>
	);
};

export default WorkPlace;
