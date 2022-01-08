import React from "react";
import Divider from "../../../../Divider";

const TimeSettings = () => {
	const timeSettingsArray = [
		{ text: "Time Format", type: "12 Hour" },
		{ text: "Date Settings", type: "MM/DD/YYYY" },
		{ text: "Week starts on", type: "Monday" },
	];
	return (
		<div className="mt-16">
			{timeSettingsArray.map((item, idx) => {
				return (
					<React.Fragment key={idx}>
						<div className="flex justify-between px-4 py-2">
							<div className="text-white">{item.text}</div>
							<div className="text-action font-semibold cursor-pointer">
								{item.type}
							</div>
						</div>
						{idx + 1 !== timeSettingsArray.length ? (
							<div className="my-1">
								<Divider height={2} />
							</div>
						) : null}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default TimeSettings;
