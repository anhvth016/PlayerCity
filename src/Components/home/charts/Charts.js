import React from "react";
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
					border="1px solid #e3e3e3"
				>
					<div style={{ fontWeight: "700", padding: "5px 30px" }}>
						Bảng xếp hạng
					</div>
				</TagMatches>

				<div className="body_chart">
					<TableCharts />
				</div>
			</div>
		</div>
	);
};
export default Charts;
