const Divider = ({
	height = 2,
	width,
}: {
	height?: number;
	width?: number;
}) => {
	return (
		<div
			className="bg-secondary"
			style={{ height: `${height}px`, width: `${width}px` }}
		></div>
	);
};

export default Divider;
