import React, { useEffect, useReducer, useContext } from "react";

import { CircularProgress } from "@material-ui/core";
import { matchesCollection } from "../../../firebase";
import { TagMatches } from "../../ultils/tools";
import { showErrorToast } from "../../ultils/tools";
import FilterList from "./FilterList";
import { AppContext } from "../../context/AppContext";

const Filter = () => {
	const { matches, updateMatch, filterMatches, updateFilterMatch } =
		useContext(AppContext);

	const showPlayed = (played) => {
		const list = matches.filter((match) => {
			return match.final === played;
		});
		updateFilterMatch(list);
	};

	const showResult = (result) => {
		const list = matches.filter((match) => {
			return match.result === result;
		});
	};
	console.log("fil:terMatches", filterMatches);
	return (
		<>
			<div className="match_filters_result">
				<TagMatches
					size="18px"
					color="#ffffff"
					font="Roboto, sans-serif"
					radius="6px 6px 0px 0px"
					width="67%"
					bck="transparent"
				>
					<div
						style={{
							fontWeight: "700",
							padding: "6px 0 0 24px",
							textAlign: "left",
						}}
					>
						Trận đấu
					</div>
				</TagMatches>
				<div className="cont cont_result_filters">
					<div onClick={() => showPlayed("All")}>Tất cả trận đấu</div>
					<div onClick={() => showPlayed("yes")}>Đã chơi</div>
					<div onClick={() => showPlayed("no")}>Lịch đấu</div>
				</div>
			</div>
			<div className="box_filter_list">
				<FilterList matches={filterMatches} />
			</div>
		</>
	);
};

export default Filter;
