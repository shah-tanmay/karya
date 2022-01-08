import React, { useState } from "react";
import FillCircleIcon from "remixicon-react/CheckboxCircleFillIcon";
import Divider from "../../../../Divider";

const Language = () => {
	const languageArray = [
		"English",
		"中文",
		"Français",
		"Deutsch",
		"Italiano",
		"日本人",
		"한국어",
		"Português (Brasil)",
		"Pусский",
		"Español",
	];
	const [selected, setSelected] = useState<string>("English");
	return (
		<div className="mt-16">
			{languageArray.map((item, idx) => {
				return (
					<React.Fragment>
						<div
							key={idx}
							className="flex justify-between py-1 px-2 cursor-pointer"
							onClick={() => setSelected(item)}
						>
							<div className="text-lg">{item}</div>
							{item === selected ? (
								<div className=" text-success">
									<FillCircleIcon />
								</div>
							) : null}
						</div>
						{idx + 1 !== languageArray.length ? (
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

export default Language;
