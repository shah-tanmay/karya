import Carrier from "../../Carrier";
import CloseIcon from "remixicon-react/CloseCircleLineIcon";
import SortIcon from "remixicon-react/ArrowUpDownLineIcon";
import MoreIcon from "remixicon-react/MoreLineIcon";
import Divider from "../../Divider";

const GreetingMenu = () => {
	const settingsArray = [
		{ icon: <CloseIcon />, border: false },
		{ icon: <SortIcon />, border: false },
		{ icon: <MoreIcon />, border: true },
	];
	return (
		<Carrier>
			<div className="flex gap-3 px-2">
				<div className="text-white font-bold">Good Morning, Tanmay</div>
				<Divider />
				<div className="flex gap-4">
					{settingsArray.map((item, idx) => {
						return (
							<div className="cursor-pointer text-white" key={idx}>
								{item.icon}
							</div>
						);
					})}
				</div>
			</div>
		</Carrier>
	);
};

export default GreetingMenu;
