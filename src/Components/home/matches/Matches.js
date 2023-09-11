import React from "react";
import { TagMatches } from "../../ultils/tools";
import Blocks from "./Blocks";

const Matches = () => {

  
 
	return (
		<div className="home_matches_wrapper">
			<div className="container">
				<TagMatches bck="#0e1731" size="50px" color="#ffffff">
					Matches
				</TagMatches>

				<Blocks />

				<TagMatches size="22px" color="#0e1731" link={true} linkTo="/the_team">
					Matches
				</TagMatches>
			</div>
		</div>
	);
};

export default Matches;
