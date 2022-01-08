import SideBar from "../components/SideBar";
import WorkPlace from "../components/WorkPlace";

const View = () => {
	return (
		<div className="flex">
			<div className="bg-primary w-3/12">
				<SideBar />
			</div>
			<div className="bg-black w-full p-6">
				<WorkPlace />
			</div>
		</div>
	);
};

export default View;
