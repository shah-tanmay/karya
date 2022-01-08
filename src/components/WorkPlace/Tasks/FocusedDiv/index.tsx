import BellIcon from "remixicon-react/Notification2LineIcon";
import ListIcon from "remixicon-react/FileList2LineIcon";
import UserIcon from "remixicon-react/User3LineIcon";
import Hashtag from "remixicon-react/HashtagIcon";
import React from "react";
import Divider from "../../../Divider";

const FocusedDiv = () => {
	const mappedIcon = [
		{ icon: <BellIcon /> },
		{ icon: <ListIcon /> },
		{ icon: <UserIcon /> },
		{ icon: <Hashtag /> },
	];
	return (
		<div className="bg-tertiary flex justify-around pt-1">
			{mappedIcon.map((item, idx) => {
				return (
					<React.Fragment>
						<div
							key={idx}
							className="text-white cursor-pointer hover:text-action"
						>
							{item.icon}
						</div>
						{idx + 1 <= mappedIcon.length - 1 ? (
							<Divider height={2} width={2} />
						) : null}
					</React.Fragment>
				);
			})}
		</div>
	);
};
export default FocusedDiv;
