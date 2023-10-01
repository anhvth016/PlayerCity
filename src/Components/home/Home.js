import React from "react";
import Charts from "./charts/Charts";
import Featured from "./featured/Featured";
import Matches from "./matches/Matches";
import MeetPlayers from "./meetPlayers/MeetPlayers";
import News from "./news/News";
import Promotion from "./promotion/Promotion";

const Home = () => {
	return (
		<div>
			<News />
			<Charts/>
			{/* <div className="bck_blue">
				<Featured />
			</div> */}

			<Matches />
		
				{/* <Featured /> */}
			
			<MeetPlayers />
			<Promotion />
		</div>
		// <div className="bck_blue"></div>
	);
};
export default Home;
