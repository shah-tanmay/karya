const AddTag = ({
	className,
	text = "Add Tag",
}: {
	className?: string;
	text?: string;
}) => {
	return (
		<div
			className={`cursor-pointer border-2 border-dotted w-max p-1 rounded-xl border-white text-grey mt-1 ml-1 ${className}`}
			style={{ fontSize: "12px" }}
		>
			{text}
		</div>
	);
};

export default AddTag;
