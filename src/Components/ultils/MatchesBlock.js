import React from "react";
import Chelsea from "../../resources/images/logos/49.png";

const MatchesBlock = ({ propsMatch }) => {
	console.log(propsMatch.localThmb, "111");
	return (
		<div className="match_block">
			<div className="match_date">{propsMatch.date}</div>
			<div className="match_wrapper">
				<div className="match_top">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(${Chelsea}) center center/cover no-repeat`,
							}}
						></div>
						<div className="team_name">{propsMatch.local}</div>
					</div>
					<div className="right">
						{propsMatch.final ? propsMatch.resultLocal : "-"}
					</div>
				</div>
				<div className="match_bottom">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(${Chelsea}) center center/cover no-repeat`,
							}}
						></div>
						<div className="team_name">{propsMatch.away}</div>
					</div>
					<div className="right">
						{propsMatch.final ? propsMatch.resultAway : "-"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MatchesBlock;
