import Button from "../../../Button";
import Divider from "../../../Divider";
import ProfilePicture from "../../../ProfilePicture";
import OptionsChip from "../SettingsDivision/OptionsChip";

const MyProfile = () => {
	const options = ["Reset Password", "Delete Account", "Sign Out"];
	return (
		<div className="mt-16">
			<div className="grid items-center text-center">
				<div className="mx-auto">
					<ProfilePicture name="Tanmay Shah" type="extralarge" />
				</div>
				<div className="font-semibold text-lg">Tanmay Shah</div>
				<div className="font-semibold">shahtanmay13@gmail.com</div>
				<div className="w-1/3 mx-auto -mt-3">
					<Button text="Go Premium" />
				</div>
				<div className="mt-5">
					{options.map((item, idx) => {
						return (
							<div key={idx} className="mt-1">
								<OptionsChip text={item} />
								{idx + 1 !== options.length ? (
									<div className="mt-2">
										<Divider />
									</div>
								) : null}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
