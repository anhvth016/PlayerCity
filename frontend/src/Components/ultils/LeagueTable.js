import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import _ from "lodash";

import LoadMore from "../common/LoadMore";
import axios from "axios";

const LeagueTable = () => {
  const [positions, setPosition] = useState([]);

  useEffect(() => {
	const fetchPosition = async () => {
		let res = await axios.get("http://localhost:8000/api/position");  // Gọi API lấy danh sách position
		console.log(res);
		const positionList = res.data;
		// Với mỗi Position của 1 đội bóng, gọi API để lấy danh sách 5 trận gần nhất.
		for( const pos of positionList){
			res = await axios.get(`http://localhost:8000/api/matches/${pos.team._id}`);
			pos['recentMatches'] = res.data; // Add vào object position
		}
		setPosition(positionList); // Set state data từ API
	}
	fetchPosition() // Gọi Hàm
  }, []);


  const showTeamMatch = (pos) => {
    const renderedMatches = _.cloneDeep(pos.recentMatches);
    renderedMatches.forEach((match) => {
      if (match.local._id === pos.team._id) {
        match["finalResult"] = match.result;
      } else {
        switch (match.result) {
          case "L":
            match["finalResult"] = "W";
            break;
          case "W":
            match["finalResult"] = "L";
            break;
          default:
            match["finalResult"] = "D";
            break;
        }
      }
      switch (match.finalResult) {
        case "W":
          match["cssClass"] = "win";
          break;
        case "L":
          match["cssClass"] = "lose";
          break;
        default:
          match["cssClass"] = "draw";
          break;
      }
    });
    return (
      <>
        {renderedMatches.map((match, index) => (
          <span key={index} className={`ratings ${match.cssClass}`}>
            {match.finalResult}
          </span>
        ))}
      </>
    );
  };

  const showTeamPosition = () =>
    positions
      ? positions.map((pos, i) => (
          <TableRow key={i}>
            <TableCell className="charts_cell">
              <p className="STT">{i + 1}</p>

              <p
                className="icon"
                style={{
                  background: `url(${pos.team.thumbnail}) center center/cover no-repeat`,
                  width: "20px",
                  height: "20px",
                }}
              ></p>
              <p>{pos.team.name}</p>
            </TableCell>
            <TableCell>{pos.matches}</TableCell>
            <TableCell>{pos.win}</TableCell>
            <TableCell>{pos.lose}</TableCell>
            <TableCell>{pos.draw}</TableCell>
            <TableCell>
              <strong>{pos.totalScore}</strong>
            </TableCell>

            <TableCell style={{ textAlign: "inherit" }}>
              {showTeamMatch(pos)}
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
