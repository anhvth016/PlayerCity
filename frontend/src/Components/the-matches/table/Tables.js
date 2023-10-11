import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { positionsCollection } from "../../../firebase";

const LeagueTable = () => {
	const [positions, setPosition] = useState(null);

	useEffect(() => {
		if (!positions) {
			positionsCollection.get().then((snapShot) => {
				const position = snapShot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setPosition(position);
			});
		}
	});
	//console.log(positions);

  const showTeamPosition = () =>
		positions
			? positions.map((pos, i) => (
					//console.log(pos)
					<TableRow key={i}>
						<TableCell>{i + 1}</TableCell>
						<TableCell>{pos.team}</TableCell>
						<TableCell>{pos.w}</TableCell>
						<TableCell>{pos.d}</TableCell>
						<TableCell>{pos.l}</TableCell>
						<TableCell>{pos.pts}</TableCell>
					</TableRow>
			  ))
			: null;

	return (
		<div className="league_table_wrapper">
			<div className="title">League Table</div>
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Pos</TableCell>
							<TableCell>Team</TableCell>
							<TableCell>W</TableCell>
							<TableCell>L</TableCell>
							<TableCell>D</TableCell>
							<TableCell>Pts</TableCell>
						</TableRow>
					</TableHead>
          <TableBody>
            {showTeamPosition()}
          </TableBody>
				</Table>
			</div>
		</div>
	);
};
export default LeagueTable;
