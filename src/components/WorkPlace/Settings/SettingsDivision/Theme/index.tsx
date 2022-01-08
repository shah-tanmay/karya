import React, { useState } from "react";
import CircleIcon from "remixicon-react/CheckboxBlankCircleLineIcon";
import FillCircleIcon from "remixicon-react/CheckboxCircleFillIcon";
import Divider from "../../../../Divider";

const Theme = () => {
	const [selectedTheme, setSelectedTheme] = useState<string>("Auto");
	const themesArray = [{ text: "Auto" }, { text: "Light" }, { text: "Dark" }];
	return (
		<div className="mt-16">
			{themesArray.map((item, idx) => {
				return (
					<React.Fragment>
						<div key={idx} className="flex gap-2 py-2">
							<div
								className="text-grey text-xl mt-0.5 cursor-pointer"
								onClick={() => setSelectedTheme(item.text)}
							>
								{selectedTheme === item.text ? (
									<FillCircleIcon className="text-action" />
								) : (
									<CircleIcon />
								)}
							</div>
							<div>{item.text}</div>
						</div>
						{idx + 1 !== themesArray.length ? (
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

export default Theme;
