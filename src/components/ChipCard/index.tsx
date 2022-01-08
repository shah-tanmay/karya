import CalenderIcon from "remixicon-react/CalendarEventFillIcon";
import MugIcon from "remixicon-react/CupFillIcon";
import SunIcon from "remixicon-react/SunCloudyFillIcon";
import SyncIcon from "remixicon-react/RefreshFillIcon";
import ArrowIcon from "remixicon-react/ArrowDropDownLineIcon";
import ProfilePicture from "../ProfilePicture";

const ChipCard = ({
	type = "primary",
	icon,
	text,
	className,
	name,
}: {
	type?: "primary" | "secondary";
	icon?: keyof typeof mapIcon;
	text: string;
	className?: string;
	name?: string;
}) => {
	const mapIcon = {
		calender: <CalenderIcon />,
		mug: <MugIcon />,
		sun: <SunIcon />,
		sync: <SyncIcon />,
	};
	return type === "primary" ? (
		<div
			className={`flex gap-2 bg-secondary px-1 py-2 rounded-lg cursor-pointer border-0 hover:border-2 hover:border-action ${className}`}
		>
			<div className="text-grey">{icon && mapIcon[icon]}</div>
			<div className="text-white text-sm font-semibold mt-0.5">{text}</div>
		</div>
	) : (
		<div
			className={`flex justify-between bg-secondary px-2 py-2 rounded-lg cursor-pointer ${className}`}
		>
			<div className="flex gap-2">
				{name ? <ProfilePicture name={name} type="small" /> : null}
				<div className="text-white text-sm font-semibold mt-0.5">{text}</div>
			</div>
			<div className="text-grey">
				<ArrowIcon />
			</div>
		</div>
	);
};

export default ChipCard;
