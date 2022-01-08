import { useState } from "react";
import CircleIcon from "remixicon-react/CheckboxBlankCircleLineIcon";
import Modal from "../../../Modal";
import TaskDetails from "../../TaskDetails";

const TaskChip = ({
	text,
	workType,
	strike = false,
}: {
	text: string;
	workType: string;
	strike?: boolean;
}) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	return (
		<div>
			<div
				className="flex gap-2 cursor-pointer"
				onClick={() => {
					setShowModal((modal) => !modal);
					setShow(true);
				}}
			>
				<div className="text-grey mt-1.5">
					<CircleIcon />
				</div>
				<div>
					<div
						className={`text-white text-m font-semibold ${
							strike ? "line-through" : ""
						}`}
					>
						{text}
					</div>
					<div className="text-grey text-sm">{workType}</div>
				</div>
				{show && (
					<Modal
						show={showModal}
						height={580}
						padding={0}
						width={500}
						onRequestClose={() => setShow(false)}
					>
						<TaskDetails height={500} />
					</Modal>
				)}
			</div>
		</div>
	);
};

export default TaskChip;
