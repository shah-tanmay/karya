import Carrier from "../../Carrier";
import SettingsIcon from "remixicon-react/Settings2LineIcon";
import SyncIcon from "remixicon-react/RefreshLineIcon";
import NotificationIcon from "remixicon-react/CheckboxBlankLineIcon";
import { useState } from "react";
import SettingsOptions from "./SettingsDivision/SettingOptions";
import NotificationDiv from "./NotificationDiv";
import SearchDiv from "./SearchOption";

const Settings = () => {
	const [showDiv, setShowDiv] = useState<boolean>(false);
	const [selected, setSelected] = useState<string>("");
	const settingsArray = [
		{
			text: "settings",
			icon: <SettingsIcon />,
			onClickDiv: <SettingsOptions />,
			onClick: () => {},
			margin: true,
		},
		{
			text: "refresh",
			icon: <SyncIcon />,
			onClickDiv: null,
			onClick: () => {
				setTimeout(() => {
					setSelected("");
					setShowDiv(false);
				}, 1000);
			},
			margin: false,
		},
		{
			text: "notification",
			icon: <NotificationIcon />,
			onClickDiv: <NotificationDiv />,
			onClick: () => {},
			margin: true,
		},
		{
			text: "search",
			icon: <SearchDiv />,
			onClickDiv: null,
			onClick: () => {},
			margin: false,
		},
	];
	return (
		<div>
			<Carrier>
				<div className="flex gap-8 p-2">
					{settingsArray.map((item, idx) => {
						return (
							<div className="flex flex-col">
								<div
									className={`cursor-pointer ${
										item.text === selected && showDiv
											? `${
													item.text === "refresh"
														? "text-grey animate-spin-slow"
														: "text-action"
											  }`
											: "text-white"
									}`}
									id={item.text}
									key={idx}
									onClick={() => {
										setShowDiv((div) => !div);
										setSelected(item.text);
										item.onClick();
									}}
								>
									{item.icon}
								</div>
								<div
									className={`fixed mt-10 z-20 ${item.margin ? "-ml-48" : ""}`}
								>
									{showDiv && selected === item.text ? item.onClickDiv : null}
								</div>
							</div>
						);
					})}
				</div>
			</Carrier>
		</div>
	);
};

export default Settings;
