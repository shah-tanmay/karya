import { useState } from "react";
import SearchIcon from "remixicon-react/Search2LineIcon";

const SearchDiv = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<div className="flex gap-5">
			<div onClick={() => setToggle((toggle) => !toggle)}>
				<SearchIcon />
			</div>
			{toggle && (
				<div>
					<input
						type="text"
						className="bg-primary outline-none px-2 caret-action"
						placeholder="Search for tasks.."
					/>
				</div>
			)}
		</div>
	);
};

export default SearchDiv;
