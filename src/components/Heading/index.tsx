const Heading = ({ text, className }: { text: string; className?: string }) => {
	return (
		<h1 className={`text-grey mt-2 ml-1 ${className}`}>
			{text.toLocaleUpperCase()}
		</h1>
	);
};

export default Heading;
