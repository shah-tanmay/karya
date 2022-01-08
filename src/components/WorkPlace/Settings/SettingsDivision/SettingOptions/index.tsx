import React, { useState } from "react";
import Container from "../../../../Container";
import Heading from "../../../../Heading";
import MyProfile from "../../MyProfile";
import OptionsChip from "../OptionsChip";
import ArrowLeftIcon from "remixicon-react/ArrowLeftLineIcon";
import Divider from "../../../../Divider";
import IntegrationDiv from "../../IntegrationDiv";
import CompletedTasks from "../CompletedTasks";
import Theme from "../Theme";
import DefaultList from "../DefaultList";
import TimeSettings from "../TimeSettings";
import Language from "../Language";
import Support from "../../Support";
import About from "../About";

const SettingsOptions = () => {
	const [showDiv, setShowDiv] = useState<JSX.Element | null>(null);
	const [heading, setHeading] = useState<string>("");
	const settingsOptionsArray = [
		{
			heading: "Account",
			options: [
				{ text: "My Profile", onClickDiv: <MyProfile /> },
				{ text: "Integrations", onClickDiv: <IntegrationDiv /> },
				{ text: "Completed Tasks", onClickDiv: <CompletedTasks /> },
			],
		},
		{
			heading: "prefrences",
			options: [
				{ text: "Theme", onClickDiv: <Theme /> },
				{ text: "Background", onClickDiv: null },
				{ text: "Default List", onClickDiv: <DefaultList /> },
				{ text: "Time Settings", onClickDiv: <TimeSettings /> },
				{ text: "Language", onClickDiv: <Language /> },
			],
		},
		{
			heading: "about",
			options: [
				{ text: "Support", onClickDiv: <Support /> },
				{ text: "About", onClickDiv: <About /> },
			],
		},
	];
	return (
		<div>
			<Container
				className="w-full overflow-auto"
				style={{ width: "30vw", maxWidth: "400px" }}
			>
				<div
					className="bg-secondary flex gap-2 justify-start px-4 py-2 rounded-t-lg font-semibold text-lg fixed"
					style={{ width: "30vw", maxWidth: "400px" }}
				>
					{showDiv && (
						<div
							className="mt-1 cursor-pointer"
							onClick={() => {
								setShowDiv(null);
								setHeading("");
							}}
						>
							<ArrowLeftIcon />
						</div>
					)}
					{showDiv ? heading : "Settings"}
				</div>
				<div className="px-3 mt-5">
					{!showDiv ? (
						<React.Fragment>
							{settingsOptionsArray.map((item, idx) => {
								return (
									<React.Fragment key={idx}>
										<Heading
											text={item.heading}
											className={`${idx === 0 ? "mt-16" : ""}`}
										/>
										<div className="ml-1 py-2">
											{item.options.map((option, idx) => {
												return (
													<React.Fragment key={idx}>
														<OptionsChip
															text={option.text}
															onClick={() => {
																setShowDiv(option.onClickDiv);
																setHeading(option.text);
															}}
														/>
														<div className="mt-1 mb-1">
															{idx + 1 !== item.options.length ? (
																<Divider />
															) : null}
														</div>
													</React.Fragment>
												);
											})}
										</div>
									</React.Fragment>
								);
							})}
						</React.Fragment>
					) : (
						showDiv
					)}
				</div>
			</Container>
		</div>
	);
};

export default SettingsOptions;
