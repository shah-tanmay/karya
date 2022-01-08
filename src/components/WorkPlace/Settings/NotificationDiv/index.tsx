import Container from "../../../Container";

const NotificationDiv = () => {
	return (
		<div>
			<div
				className="bg-secondary flex justify-start px-4 py-2 rounded-t-lg font-semibold text-lg fixed"
				style={{ width: "30vw", maxWidth: "400px" }}
			>
				Notifications
			</div>
			<Container
				className="grid items-center text-center"
				style={{ width: "30vw", maxWidth: "400px" }}
			>
				<div className="text-white font-semibold text-2xl">
					You Have No New Notifications.
				</div>
			</Container>
		</div>
	);
};

export default NotificationDiv;
