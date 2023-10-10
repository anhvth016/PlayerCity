import React from "react";
import LeagueTable from "../../ultils/LeagueTable";
import { TagMatches } from "../../ultils/tools";
import TableCharts from "./TableCharts";

const Charts = () => {
	return (
		<div className="home_charts">
			<div className="container" style={{ border: "1px solid #e3e3e3" }}>
				<TagMatches
					size="30px"
					color="#252525"
					font="Roboto, sans-serif"
					borderBottom="1px solid rgb(227, 227, 227)"
				>
					<div style={{ fontWeight: "700", padding: "5px 30px" }}>
						Bảng xếp hạng
					</div>
				</TagMatches>

				<div className="body_chart">
					<LeagueTable />
				</div>
			</div>
		</div>
	);
};
export default Charts;
