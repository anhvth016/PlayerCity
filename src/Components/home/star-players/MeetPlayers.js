import { React, useEffect, useState } from "react";

import { TagMatches } from "../../ultils/tools";
import { Link } from "react-router-dom";
import Start from "../../../resources/images/test/co-giao.png"
import LoadMore from "../../common/LoadMore";
import { getPlayedStart } from "../../../temp/news-db";
import moment from "moment";
import "moment/locale/vi";


const MeetPlayers = () => {
	const [played, setPlayed] = useState(null);
	useEffect(() => {
		getPlayedStart()
			.then((response) => {
				setPlayed(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [])


	let date = null;
	if (played) {
		date = moment(played.published_date);
		date.locale("vi");
	}

	return (
		<div className="home_meetplayers">
			<div className="container">
				<TagMatches
					size="30px"
					color="#252525"
					font="Roboto, sans-serif"
					borderBottom="1px solid #ebebeb"
				>
					<div style={{ fontWeight: "700" }}>Ngôi sao thể thao</div>
				</TagMatches>
				<div className="featured_news_home">
					<div className="home_card_wrapper">
						<div className="player_start">
							<div className="left">
								{played &&
									played.map((player) => (
										<div className="player_box">
											<div className="news_img">
												<Link to={`/star/star-details/${player.id}`}>
													<img
														src={Start}
														style={{ width: "100%", height: "100%" }}
													/>
												</Link>
											</div>
											<div className="news_info">
												<div className="title">
													<h3 style={{ margin: "0" }}>
														<Link to={`/star/star-details/${player.id}`}>
															{player.title}
														</Link>
													</h3>
												</div>
												<div className="detail">
													<p>{player.description}</p>
												</div>
												<div className="time">
													<p>
														Asiad 2023 | {date.format("DD/MM/YYYY | hh:mm")}
														{/* Asiad 2023 | 21/09/2023 | 00:19 */}
													</p>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
						<LoadMore Linkto="/star" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default MeetPlayers;
