import Container from "../../Container";
import Header from "./Header";
import TaskDetailsMain from "./TaskDetailsMain";

const TaskDetails = ({ height = 408 }: { height?: number }) => {
	return (
		<div>
			<Header />
			<Container overflow height={height} className="rounded-b-lg">
				<TaskDetailsMain />
			</Container>
		</div>
	);
};

export default TaskDetails;
