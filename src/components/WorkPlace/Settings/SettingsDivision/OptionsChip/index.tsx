import ArrowIcon from "remixicon-react/ArrowRightSLineIcon";

const OptionsChip = ({
	text,
	onClick,
}: {
	text: string;
	onClick?: () => void;
}) => {
	return (
		<div
			className="flex justify-between cursor-pointer hover:bg-tertiary hover:bg-opacity-80 w-full py-1 rounded"
			onClick={(e) => {
				e.preventDefault();
				if (onClick) {
					onClick();
				}
			}}
		>
			<div className="text-white text-lg font-thin ml-1">{text}</div>
			<div className="mt-0.5">
				<ArrowIcon />
			</div>
		</div>
	);
};

export default OptionsChip;
