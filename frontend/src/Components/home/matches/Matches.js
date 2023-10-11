import React from "react";
import { TagMatches } from "../../ultils/tools";
import Blocks from "./Blocks";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoadMore from "../../common/LoadMore";

const Matches = () => {
	return (
		<div className="home_matches_wrapper">
			<div
				className="container"
				style={{ border: "1px solid rgb(227, 227, 227)" }}
			>
				<TagMatches
					size="30px"
					color="rgb(37, 37, 37)"
					font="Roboto, sans-serif"
					borderBottom="1px solid #ebebeb"
				>
					<div style={{ fontWeight: "700", padding: "5px 30px" }}>
						Trận đấu nổi bật
					</div>
				</TagMatches>
				<Blocks />
			</div>
			<div className="container">
				<LoadMore linkTo="/the-matches" />
			</div>
		</div>
	);
};

export default Matches;
