import { useHistory } from "react-router-dom";
import { app } from "../../../../firebase/firebase.config";
import React from "react";
import Button from "../../../Button";
import Divider from "../../../Divider";
import ProfilePicture from "../../../ProfilePicture";
import OptionsChip from "../SettingsDivision/OptionsChip";
import { getAuth } from "@firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../../../context/usercontext";

const MyProfile = () => {
	const history = useHistory();
	const auth = getAuth(app);
	const user = useContext(UserContext);
	const name = user?.displayName;
	const email = user?.email;
	const options = [
		{ text: "Reset Password", onClick: () => {} },
		{ text: "Delete Account", onClick: () => {} },
		{
			text: "Sign Out",
			onClick: () => {
				auth.signOut();
				history.push("/login");
			},
		},
	];
	return (
		<React.Fragment>
			{name && email && (
				<div className="mt-16">
					<div className="grid items-center text-center">
						<div className="mx-auto">
							<ProfilePicture name={name!} type="extralarge" />
						</div>
						<div className="font-semibold text-lg">{name}</div>
						<div className="font-semibold">{email}</div>
						<div className="w-1/3 mx-auto -mt-3">
							<Button text="Go Premium" />
						</div>
						<div className="mt-5">
							{options.map((item, idx) => {
								return (
									<div
										key={idx}
										className="mt-1"
										onClick={(event) => {
											event.preventDefault();
											item.onClick();
										}}
									>
										<OptionsChip text={item.text} />
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
			)}
		</React.Fragment>
	);
};

export default MyProfile;
