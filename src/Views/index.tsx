import { useContext } from "react";
import SideBar from "../components/SideBar";
import WorkPlace from "../components/WorkPlace";
import { UserContext } from "../context/usercontext";

const View = () => {
	const user = useContext(UserContext);
	console.log(user?.displayName);
	return (
		<div>
			{user ? (
				<div className="flex">
					<div className="bg-primary w-3/12">
						<SideBar />
					</div>
					<div className="bg-black w-full p-6">
						<WorkPlace />
					</div>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default View;
