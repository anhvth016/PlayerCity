import React from "react";

const MatchesBlock = ({ propsMatch }) => {
	return (
		<div className="match_block">
			<div className="match_date">{propsMatch.date}</div>
			<div className="match_wrapper">
				<div className="match_top">
					<div className="left">
						<div
							className="icon"
							style={{
								background: `url(/images/team_icons/${propsMatch.localThmb}.png)`,
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
								background: `url(/images/team_icons/${propsMatch.awayThmb}.png)`,
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
