import React from "react";
import Settings from "..";
import Carrier from "../../../Carrier";

const TopMenu = () => {
	return (
		<React.Fragment>
			<div className="w-2/4"></div>
			<div className="flex gap-4">
				<Settings />
				<Carrier>
					<div className="text-action cursor-pointer px-5 mt-1.5">
						Go Premium
					</div>
				</Carrier>
			</div>
		</React.Fragment>
	);
};

export default TopMenu;
