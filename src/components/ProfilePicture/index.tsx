const ProfilePicture = ({
	type = "large",
	name,
}: {
	type?: "small" | "large" | "extralarge";
	name: string;
}) => {
	const initials = (name: string) => {
		return name.split(" ")[0][0] + name.split(" ")[1][0];
	};
	return (
		<div
			className={`bg-purple text-white w-max  rounded-full ml-1 mt-1 grid items-center ${
				type === "small"
					? "px-1.5 py-1"
					: type === "large"
					? "px-2 py-1.5"
					: "py-4 px-5"
			}`}
			style={{
				fontSize: `${
					type === "small" ? "8px" : type === "large" ? "10px" : "23px"
				}`,
			}}
		>
			{initials(name)}
		</div>
	);
};

export default ProfilePicture;
