import AddIcon from "remixicon-react/AddFillIcon";

const Button = ({
	type = "primary",
	text,
	icon,
	onClick,
}: {
	type?: "primary" | "dark";
	text: string;
	icon?: keyof typeof iconMap;
	onClick?: () => void;
}) => {
	const iconMap = {
		add: <AddIcon />,
	};
	return (
		<button
			className={`flex justify-center w-full gap-2 p-2 mt-5 cursor-pointer ${
				type === "primary"
					? "bg-action text-white rounded-3xl"
					: "bg-secondary text-action font-bold"
			}`}
			onClick={(e) => {
				e.preventDefault();
				if (onClick) {
					onClick();
				}
			}}
		>
			{icon ? <div>{iconMap[icon]}</div> : null}
			<div>{text}</div>
		</button>
	);
};

export default Button;
