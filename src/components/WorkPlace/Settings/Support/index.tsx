import QuestionIcon from "remixicon-react/QuestionFillIcon";
import BugIcon from "remixicon-react/BugFillIcon";
import SuggestIcon from "remixicon-react/Chat3FillIcon";
import Divider from "../../../Divider";

const Support = () => {
	const supportArray = [
		{ text: "Help Center", icon: <QuestionIcon size={60} /> },
		{ text: "Report a Bug", icon: <BugIcon size={60} /> },
		{ text: "Suggest a feature", icon: <SuggestIcon size={60} /> },
	];
	return (
		<div className="mt-16 py-2">
			{supportArray.map((item, idx) => {
				return (
					<div
						key={idx}
						className="grid items-center text-center cursor-pointer"
					>
						<div className="mx-auto my-2 text-action">{item.icon}</div>
						<div>{item.text}</div>
						{idx + 1 !== supportArray.length ? (
							<div className="my-1">
								<Divider height={2} />
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default Support;
