import React from "react";
import Charts from "./charts/Charts";
import Featured from "./featured/Featured";
import Matches from "./matches/Matches";
import Star from "./star-players/Star";
import News from "./news/News";
import Promotion from "./promotion/Promotion";

const Home = () => {
	return (
		<div>
			<News />
			<Charts />
			{/* <div className="bck_blue">
				<Featured />
			</div> */}

			<Matches />

			{/* <Featured /> */}

			<Star />
			<Promotion />
		</div>
		// <div className="bck_blue"></div>
	);
};
export default Home;
