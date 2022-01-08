import { useState } from "react";
import AddTaskModal from "../AddTaskModal";
import Button from "../Button";
import Modal from "../Modal";
import Profile from "./Profile";
import SideBarList from "./SideBarList";

const SideBar = () => {
	const [modal, setModal] = useState<boolean>(false);
	return (
		<div className="h-screen p-6">
			<Profile />
			<Button
				text="Create a task"
				icon="add"
				onClick={() => setModal((modal) => !modal)}
			/>
			<Modal show={modal} onRequestClose={() => setModal(false)}>
				<AddTaskModal closeModal={() => setModal(false)} />
			</Modal>
			<SideBarList />
		</div>
	);
};

export default SideBar;
