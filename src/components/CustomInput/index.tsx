const CustomInput = ({
	placeholder,
	fontSize,
	className,
	autofocus,
	defaultValue,
}: {
	placeholder?: string;
	fontSize: number;
	className?: string;
	autofocus?: boolean;
	defaultValue?: string;
}) => {
	return (
		<input
			placeholder={placeholder}
			style={{ fontSize: `${fontSize}px` }}
			className={`w-full h-12 p-2 bg-primary text-2xl rounded-xl outline-none text-white font-bold focus:bg-black hover:bg-black ${className}`}
			autoFocus={autofocus}
			defaultValue={defaultValue}
		/>
	);
};

export default CustomInput;
