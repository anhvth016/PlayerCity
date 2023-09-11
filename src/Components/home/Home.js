import React from "react";
import Featured from "./featured/Featured";
import Matches from "./matches/Matches";
import MeetPlayers from "./meetPlayers/MeetPlayers";

const Home = () => {
	return (
		<div className="bck_blue">
			<Featured />
			<Matches />
			<MeetPlayers/>
		</div>
	);
};
export default Home;
