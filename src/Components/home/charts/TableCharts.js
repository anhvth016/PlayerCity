import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import Chelsea from "../../../resources/images/logos/49.png"
import ButtonStar from "../meetPlayers/ButtonStar";

const TableCharts = () => {
  return (
		<div className="charts_table_wrapper">
			{/* <div className="title">Thứ hạng</div> */}
			<div>
				<Table style={{ marginTop: "20px" }}>
					<TableHead>
						<TableRow className="charts_table">
							<TableCell className="places">Thứ hạng</TableCell>
							<TableCell>Trận</TableCell>
							<TableCell>+/-</TableCell>
							<TableCell>Điểm</TableCell>
							<TableCell>Phong độ</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="charts_body">
						<TableRow key={1}>
							<TableCell className="charts_cell">
								<p className="STT">1</p>

								<p
									className="icon"
									style={{
										background: `url(${Chelsea}) center center/cover no-repeat`,
										width: "20px",
										height: "20px",
									}}
								></p>

								<p>Man City</p>
							</TableCell>
							<TableCell>2</TableCell>
							<TableCell>3</TableCell>
							<TableCell><strong>4</strong></TableCell>
							<TableCell style={{ textAlign: "inherit" }}>
								<span className="ratings">T</span>
								<span className="ratings">T</span>
								<span className="ratings">T</span>
								<span className="ratings">T</span>
								<span className="ratings">T</span>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
      <ButtonStar/>
		</div>
	);
}
export default TableCharts;