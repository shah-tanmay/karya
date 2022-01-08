import GreetingMenu from "../GreetingMenu";
import TaskDetails from "../TaskDetails";
import Tasks from "../Tasks";

const TaskWorkPlace = () => {
	return (
		<div className="mt-3">
			<GreetingMenu />
			<div className="grid grid-cols-2 mt-10 grid-flow-row gap-10">
				<div>
					<Tasks />
				</div>
				<div>
					<TaskDetails />
				</div>
			</div>
		</div>
	);
};

export default TaskWorkPlace;
