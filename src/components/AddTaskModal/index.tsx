import AddTag from "../AddTag";
import Button from "../Button";
import CustomInput from "../CustomInput";
import Heading from "../Heading";
import Pills from "../Pills";
import ProfilePicture from "../ProfilePicture";

const AddTaskModal = ({ closeModal }: { closeModal: () => void }) => {
	const reminderArray = ["custom", "tommorow", "next week", "someday"];
	return (
		<div>
			<div className="flex gap-2">
				<div className="w-2/3 border-r-2 border-secondary pr-2">
					<CustomInput placeholder="I want to.." fontSize={25} autofocus />
					<Heading text="Remind Me" />
					<div className="flex flex-wrap gap-5 mt-2">
						{reminderArray.map((item, idx) => {
							return <Pills text={item} key={idx} />;
						})}
					</div>
					<Heading text="Notes" />
					<CustomInput placeholder="Insert your notes here" fontSize={15} />
				</div>
				<div>
					<Heading text="Assigned to" />
					<div className="flex gap-2">
						<div>
							<ProfilePicture name="Tanmay Shah" />
						</div>
						<div className="mt-1 text-action cursor-pointer">Tanmay Shah</div>
					</div>
					<Heading text="List" />
					<div className="mt-1 text-action cursor-pointer ml-1">Personal</div>
					<Heading text="Time" />
					<div className="mt-1 text-action cursor-pointer ml-1">Set time</div>
					<Heading text="tags" />
					<AddTag />
				</div>
			</div>
			<div className="flex gap-2 w-full mt-2">
				<div className="w-full">
					<Button type="dark" text="Close" onClick={closeModal} />
				</div>
				<div className="w-full">
					<Button type="dark" text="Add Task" />
				</div>
			</div>
		</div>
	);
};

export default AddTaskModal;
