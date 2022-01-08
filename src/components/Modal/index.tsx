import ReactModal from "react-modal";

const Modal = ({
	show,
	children,
	height = 380,
	padding = 20,
	width,
	onRequestClose,
}: {
	show: boolean;
	children: any;
	height?: number;
	padding?: number;
	width?: number;
	onRequestClose: () => void;
}) => {
	console.log(show);
	const customStyles = {
		content: {
			maxWidth: "600px",
			width: `${width}px`,
			height: `${height}px`,
			margin: "auto",
			border: "none",
			backgroundColor: "#161616",
			padding: `${padding}px`,
		},
		overlay: {
			borderRadius: "8px",
			background: "rgba(0,0,0,0.75)",
		},
	};
	return (
		<ReactModal
			isOpen={show}
			style={customStyles}
			onRequestClose={onRequestClose}
			shouldCloseOnOverlayClick={true}
			ariaHideApp={false}
		>
			{children}
		</ReactModal>
	);
};

export default Modal;
