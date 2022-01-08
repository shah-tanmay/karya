const Container = ({
	children,
	className,
	overflow,
	height,
	style,
}: {
	children: any;
	className?: string;
	overflow?: boolean;
	height?: number;
	style?: any;
}) => {
	return (
		<div
			className={`bg-primary ${className} ${overflow ? "overflow-auto" : ""}`}
			style={{ ...style, height: `${height ? `${height}px` : "430px"}` }}
		>
			{children}
		</div>
	);
};

export default Container;
