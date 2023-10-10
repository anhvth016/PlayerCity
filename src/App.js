import React from "react";
import "./resources/css/App.css";
import Routes from "./Routes";
import AppContextComponent from "./Components/context/AppContext";

const App = (props) => {
	
	return (
		<AppContextComponent>
			<Routes {...props} />
		</AppContextComponent>
	);
};

export default App;
