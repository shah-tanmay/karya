import { useState } from "react";
import Modal from "../../../Modal";

const Calender = ({ closeModal }: { closeModal: () => void }) => {
	const [showModal, setShowModal] = useState<boolean>(true);
	return (
		<div className="text-white">
			<Modal
				show={showModal}
				onRequestClose={() => {
					setShowModal(false);
					closeModal();
				}}
				height={300}
			>
				Hello
			</Modal>
		</div>
	);
};

export default Calender;
