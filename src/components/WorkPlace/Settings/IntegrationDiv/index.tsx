import Divider from "../../../Divider";
import OptionsChip from "../SettingsDivision/OptionsChip";

const IntegrationDiv = () => {
	const options = ["3000+ Apps", "WhatsApp Reminders"];
	return (
		<div className="mt-16">
			{options.map((item, idx) => {
				return (
					<div key={idx}>
						<OptionsChip text={item} />
						{idx + 1 !== options.length ? (
							<div className="my-1">
								<Divider />
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default IntegrationDiv;
