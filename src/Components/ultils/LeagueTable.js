import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import _ from 'lodash';

import { positionsCollection } from "../../firebase";
import Chelsea from "../../resources/images/logos/49.png";
import LoadMore from "../common/LoadMore";
import { AppContext } from "../context/AppContext";
import { getNewsDb } from "../../temp/news-db";


const LeagueTable = () => {
	const [positions, setPosition] = useState(null);
	const [teams, setTeams] = useState(null);
	const [lastVisible, setLastVisible] = useState(null);
	const [sortDate, setSortDate] = useState(null);

	const context = useContext(AppContext);
	const { matches } = context;
	console.log(matches);

	const sortMatch = matches.sort((a, b) => {
		let date1 = new Date(a.date);
		let date2 = new Date(b.date);
		return date2.getTime() - date1.getTime()
	});
	// sortMatch.map((e) => {
	// 	console.log(`${e.date} `);
	// });



	// useEffect(() => {
	// 	if(!teams) {
	// 		getNewsDb().then((response) => {
	// 			setTeams(response)
	// 		}).catch((error) => {
	// 			console.log(error)
	// 		})
	// 	}
	// }, [])

	// console.log(teams)

	useEffect(() => {
		if (!positions) {
			positionsCollection
				.limit(10)
				.get()
				.then((snap) => {
					const lastVisible = snap.docs[snap.docs.length - 1];
					const position = snap.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setLastVisible(lastVisible);
					setPosition(position);
				});
		}
	});
	console.log(positions)

	const result = [];
	for (let i = 1; i<= 5; i++) {
		if(matches[i]) {
			result.push(matches[i]);
		}
	}
	console.log(result);

	const showTeamMatch = (teamName) => { // Ten doi
		const teamMatches = matches.filter(match => { // Toan bo match cua doi bong co teamName
			return match.away === teamName || match.local === teamName;
		});
		teamMatches.sort((match1, match2) => {
			let date1 = new Date(match1.date);
			let date2 = new Date(match2.date);
			return date2.getTime() - date1.getTime();
		});
		const top5Matches = teamMatches.slice(0, 5);
		// Chuan bi them field vao object match nen phai deepcopy.
		const renderedMatches = _.cloneDeep(top5Matches);

		renderedMatches.forEach( match => {
			if(match.local === teamName) {
				match['finalResult'] = match.result;
			} else {
				switch(match.result){
					case 'L':
						match["finalResult"] = "W";
						break;
					case 'W':
						match["finalResult"] = "L";
						break;
					default:
						match["finalResult"] = "D";
						break;
				}
			}
			switch(match.finalResult){
				case 'W':
					match['cssClass'] = 'win';
					break;
				case 'L':
					match['cssClass'] = 'lose';
					break;
				case 'D':
					match['cssClass'] = 'draw';
					break;
			}
		})


		return (
			<>
				{renderedMatches.map((match, index) => (
						<span key={index} className={`ratings ${match.cssClass}`}>{match.finalResult}</span>
				))}
			</>
		);

	}

	const showTeamPosition = () =>
		positions
			? positions.map((pos, i) => (
					<TableRow key={i}>
						<TableCell className="charts_cell">
							<p className="STT">{i + 1}</p>

							<p
								className="icon"
								style={{
									background: `url(${Chelsea}) center center/cover no-repeat`,
									width: "20px",
									height: "20px",
								}}
							></p>
							<p>{pos.team}</p>
						</TableCell>
						<TableCell>{pos.matches}</TableCell>
						<TableCell>{pos.w}</TableCell>
						<TableCell>{pos.l}</TableCell>
						<TableCell>{pos.d}</TableCell>
						<TableCell>
							<strong>{pos.pts}</strong>
						</TableCell>

						<TableCell style={{ textAlign: "inherit" }}>
							{showTeamMatch(pos.team)}
						</TableCell>
					</TableRow>
			  ))
			: null;

	return (
		<div className="charts_table_wrapper">
			<div>
				<Table style={{ marginTop: "20px" }}>
					<TableHead>
						<TableRow className="charts_table">
							<TableCell className="places">Thứ hạng</TableCell>
							<TableCell>Trận</TableCell>
							<TableCell>Thắng</TableCell>
							<TableCell>Thua</TableCell>
							<TableCell>Hoà</TableCell>
							<TableCell>Điểm</TableCell>
							<TableCell>Phong độ</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="charts_body">{showTeamPosition()}</TableBody>
				</Table>
			</div>
			<LoadMore linkTo="/the-matches" />
		</div>
	);
};
export default LeagueTable;
