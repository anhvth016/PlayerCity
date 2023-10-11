import React, { useEffect, useState } from "react";

import MU from "../../../resources/images/test/mu.png";
import Logo from "../../../resources/images/logos/logo-epl.png";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { getNewsDb } from "../../../temp/news-db";

const FeaturedNews = () => {
	const [dataNews, setDataNews] = useState({news: []});

	useEffect(() => {
		getNewsDb()
			.then((response) => {
				response.news = response.news.sort(
					(a, b) => b.published_date - a.published_date
				);
				setDataNews(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const otherNews = [];

	// Doan code lay 4 thang tiep theo.
	for( let i = 1; i<=4; i++){
		if (dataNews.news[i]) {
			otherNews.push(dataNews.news[i]);
		}
	}

	return (
		<div className="featured_news_wrapper">
			<div className="news_container">
				<div className="featured_news_header">
					<h1 style={{ color: "#ffffff", textTransform: "uppercase" }}>
						<img
							src={Logo}
							style={{
								maxWidth: "inherit",
								height: "30px",
								marginRight: "10px",
							}}
						/>
						Ngoại hạng anh
					</h1>
				</div>
				<div className="featured_news_home">
					{dataNews && dataNews.news.length > 0 && (
						<div className="left">
							<div className="news_box">
								<Link to={`/news/details/${dataNews.news[0].id}`}>
									<div
										className="news_img"
										style={{
											background: `url(${MU}) center center/cover no-repeat`,
											height: "369px",
										}}
									></div>
								</Link>

								<div className="news_info" style={{ paddingBottom: "3px" }}>
									<div className="title">
										<Link to={`/news/details/${dataNews.news[0].id}`}>
											{dataNews.news[0].title}{" "}
										</Link>
									</div>
									<div className="des">
										<h3>{dataNews.news[0].description}</h3>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className="right">
						<div className="row_colums">
							{otherNews.length > 0 &&
								otherNews.map((data, idx) => (
									<div key={idx} className="box_colums">
										<Link to={`/news/details/${data.id}`}>
											<div
												className="news_img"
												style={{
													background: `url(${MU}) center center/cover no-repeat`,
													height: "146px",
												}}
											></div>
										</Link>
										<div className="news_info">
											<div className="title">
												<Link to={`/news/details/${data.id}`}>
													{data.title}
												</Link>
											</div>
											<div className="des_box_right">
												<p>{data.description}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeaturedNews;
