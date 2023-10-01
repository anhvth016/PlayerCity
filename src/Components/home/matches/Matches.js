import React from "react";
import { TagMatches } from "../../ultils/tools";
import Blocks from "./Blocks";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Matches = () => {
	return (
		<div className="home_matches_wrapper">
			<div className="container">
				<TagMatches
					bck="#0e1731"
					size="30px"
					color="#ffffff"
					font="Roboto, sans-serif"
				>
					<div style={{ fontWeight: "700", padding: "5px 30px" }}>
						Trận đấu nổi bật
						<Button
							disableElevation
							variant="outlined"
							component={Link}
							to={"/the-matches"}
							style={{
								float: "right",
								fontSize: "18px",
								lineHeight: "35px",
								color: "#ffffff",
								textTransform: "capitalize",
							}}
						>
							Xem thêm >
						</Button>
					</div>
				</TagMatches>
				<Blocks />
			</div>
		</div>
	);
};

export default Matches;
