import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextComponent = (props) => {
	const [matches, setMatches] = useState([]);
	const [filterMatches, setFilterMatches] = useState([]);
	return (
		<AppContext.Provider
			value={{
				filterMatches: filterMatches,
				updateFilterMatch: setFilterMatches,
				matches: matches,
				updateMatch: setMatches,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextComponent;
