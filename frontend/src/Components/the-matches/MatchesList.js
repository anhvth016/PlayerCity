import React from "react";
import Filter from "./filter/Filter";

const MatchesList = (props) => {
	console.log(props);

	// const showMatches = () =>
	// 	props.matches ? (
	// 		<>
	// 			<Filter />
	// 		</>
	// 	) : null;

	return <Filter />;
};
export default MatchesList;
