import { React } from "react";
import { Fade } from "react-awesome-reveal";

import { TagMatches } from "../../ultils/tools";
import HomeCards from "../meetPlayers/HomeCards"

let tagDefault = {
	bck: "#0e1731",
	size: "100px",
	color: "#ffffff",
};
const MeetPlayers = () => {
	const showTextTag = (text) => (
		<TagMatches
			{...tagDefault}
			add={{ display: "inline-block", marginBottom: "20px" }}
		>
			{text}
		</TagMatches>
	);
	return (
		<Fade triggerOnce>
			<div className="home_meetplayers">
				<div className="container">
					<div className="home_meetplayers_wrapper">
						<div className="home_card_wrapper"><HomeCards/></div>
						<div className="home_text_wrapper">
							<div>{showTextTag("Meet")}</div>
							<div>{showTextTag("The")}</div>
							<div>{showTextTag("Players")}</div>
							<div>
								<TagMatches
									bck="#ffffff"
									size="27px"
									color="#0e1731"
									link={true}
									linkTo="/the-team"
									add={{ display: "inline-block", marginBottom: "27px", border: '1px solid #0e1731' }}
								>Meet them here</TagMatches>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};
export default MeetPlayers;
