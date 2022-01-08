import CameraIcon from "remixicon-react/CameraFillIcon";
const Profile = () => {
	return (
		<div className="flex gap-4">
			<div className="grid items-center">
				<div className="text-white grid items-center border-white border-2 p-2 rounded-full">
					<CameraIcon />
				</div>
			</div>
			<div className="whitespace-nowrap">
				<div className="font-bold text-white">Tanmay Shah</div>
				<div className="text-grey">
					Free Plan.{" "}
					<span className="text-action cursor-pointer">Upgrade?</span>
				</div>
			</div>
		</div>
	);
};

export default Profile;
