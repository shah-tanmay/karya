import BellIcon from "remixicon-react/Notification2LineIcon";

const Pills = ({ text }: { text: string }) => {
	return (
		<div className="flex bg-secondary w-max p-1.5 rounded-xl text-white gap-1 text-sm cursor-pointer">
			<div>
				<BellIcon />
			</div>
			<div className="mt-0.5">{text}</div>
		</div>
	);
};

export default Pills;
