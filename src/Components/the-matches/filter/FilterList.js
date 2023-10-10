import React, { useEffect, useState, useReducer } from "react";
import { CircularProgress } from "@material-ui/core";

const FilterList = (props) => {
  //const [loading, setLoading] = useState(true);
	const showMatches = () =>
  
		props.matches && (
			<>
				{props.matches.map((data, index) => (
					<div className="match_box_big" key={index}>
						<div className="block_wraper">
							<div className="block">
								<div
									className="icon"
									style={{
										background: `url(/images/team_icons/${data.localThmb}.png)`,
									}}
								></div>
								<div className="team">{data.local}</div>
								<div className="result">{data.resultLocal}</div>
							</div>
							<div className="block">
								<div
									className="icon"
									style={{
										background: `url(/images/team_icons/${data.awayThmb}.png)`,
									}}
								></div>
								<div className="team">{data.away}</div>
								<div className="result">{data.resultAway}</div>
							</div>
						</div>
						<div className="block_wraper nfo">
							<div>
								<strong>Date:</strong>
								{data.date}
							</div>
							<div>
								<strong>Stadium:</strong>
								{data.stadium}
							</div>
							<div>
								<strong>Referee:</strong>
								{data.referee}
							</div>
						</div>
					</div>
				))}
			</>
		);

	return <div>{showMatches()}</div>;
};

export default FilterList;
