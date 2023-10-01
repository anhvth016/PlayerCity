import { React } from "react";
import { Fade } from "react-awesome-reveal";

import { TagMatches } from "../../ultils/tools";
import HomeCards from "../meetPlayers/HomeCards"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Start from "../../../resources/images/test/co-giao.png"


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
					<TagMatches
						size="30px"
						color="#252525"
						font="Roboto, sans-serif"
						border="1px solid #e3e3e3"
					>
						<div style={{ fontWeight: "700" }}>
							Ngôi sao thể thao
						</div>
					</TagMatches>
					{/* <div className="home_meetplayers_wrapper"> */}
					<div className="featured_news_home">
						<div className="home_card_wrapper">
							<HomeCards />
						</div>
						
						<div className="home_text_wrapper">
							{/* <SportsStar /> */}
							{/* <div>{showTextTag("Meet")}</div>
							<div>{showTextTag("The")}</div>
							<div>{showTextTag("Players")}</div>
							<div>
								<TagMatches
									bck="#ffffff"
									size="27px"
									color="#0e1731"
									link={true}
									linkTo="/the-team"
									add={{
										display: "inline-block",
										marginBottom: "27px",
										border: "1px solid #0e1731",
									}}
								>
									Meet them here
								</TagMatches> */}
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};
export default MeetPlayers;
