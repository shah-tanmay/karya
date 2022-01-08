const ExpandableList = ({ list }: { list: string[] }) => {
	return (
		<div className="flex flex-col gap-3 mt-1">
			{list.map((item) => {
				return <div className="text-grey text-base font-medium">{item}</div>;
			})}
		</div>
	);
};

export default ExpandableList;
