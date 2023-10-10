import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect, useReducer, useContext } from "react";
import { matchesCollection } from "../../firebase";
import { showErrorToast } from "../ultils/tools";
import Filter from "./filter/Filter";
import LeagueTable from "../ultils/LeagueTable";
import { TagMatches } from "../ultils/tools";
import LogoFilters from "../../resources/images/logos/logo-filters.png";
import {AppContext} from "../../Components/context/AppContext";

const TheMatches = () => {
	const appContext = useContext(AppContext);

	const { matches, updateMatch, filterMatches, updateFilterMatch } = appContext;
	/** 1. SỬ DỤNG REDUX-TOOLKIT ĐỂ QUẢN LÝ STATE DANH SÁCH TRẬN ĐẤU */

	/** 1.1 LẤY DỮ LIỆU TRẬN ĐẤU TỪ API */

	/** 1.2 THAY ĐỔI STATE CỦA CONTEXT */

	/** 1.3 VÀO BÊN TRONG COMPONENT CON, SỬ DỤNG USESELECTOR ĐỂ LẤY DANH SÁCH TRẬN ĐẤU TỪ STATE CỦA CONTEXT RA. */

	// const [loading, setLoading] = useState(true);

	const [state, dispatch] = useReducer(
		(prevState, nextState) => {
			return { ...prevState, ...nextState };
		},
		{
			filterMatches: null,
			playedFilter: "All",
			resultFilter: "All",
		}
	);


	useEffect(() => {
		if (matches.length == 0) {
			matchesCollection
				.get()
				.then((snapshot) => {
					const match = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					console.log('match');
					console.log(match);
					updateMatch(match);
					// dispatch({ ...state, filterMatches: matches });
				})
				.catch((error) => {
					showErrorToast(error);
				});
			// .finally(() => {
			// 	setLoading(false);
			// });
		}
	}, [matches]);
	console.log(matches);

	const showPlayed = (played) => {
		// all, yes, no
		//setLoading(true);
		const list = matches.filter((match) => {
			return match.final === played;
		});
		// UPDATE FILTER MATCH
		updateFilterMatch(played === "All" ? matches : list);

		// dispatch({
		// 	...state,
		// 	filterMatches: played === "All" ? matches : list,
		// 	playedFilter: played,
		// 	resultFilter: "All",
		// });
		//setLoading(false);
	};

	const showResult = (result) => {
		const list = matches.filter((match) => {
			return match.result === result;
		});

		dispatch({
			...state,
			filterMatches: result === "All" ? matches : list,
			playedFilter: "All",
			resultFilter: result,
		});
	};
	console.log(filterMatches, "filter matches");
	return (
		<>
			{matches && (
				<div className="the_matches_container">
					<div className="the_matches_wrapper">
						<div className="container">
							<div className="left">
								<div className="match_filters">
									<div className="match_filter_logo">
										<img src={LogoFilters} />
									</div>
									<div
										className="match_filters_box"
										style={{ marginLeft: "auto" }}
									>
										<div
											className={`tag option ${
												state.playedFilter === "All" ? "active" : ""
											}`}
											onClick={() => showPlayed("All")}
										>
											Trận đấu
										</div>
									</div>
									<div className="match_filters_box">
										<div className="tag">Kết quả</div>
									</div>
									<div className="match_filters_box">
										<div className="tag">Bảng điểm</div>
									</div>
								</div>

								<div className="box_matches_list">
									{<Filter matches={filterMatches} />}
								</div>
							</div>

							<div className="matches_transcript">
								<TagMatches
									size="18px"
									color="#ffffff"
									font="Roboto, sans-serif"
									radius="6px 6px 0px 0px"
									bck="rgb(57, 63, 54)"
								>
									<div
										style={{
											fontWeight: "700",
											padding: "10px 30px",
										}}
									>
										Bảng điểm
									</div>
								</TagMatches>
								<div className="league_table">
									<LeagueTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default TheMatches;
