import React, { useEffect, useState } from "react";
import moment from "moment";

import MU from "../../../resources/images/test/mu.png";
import Logo from "../../../resources/images/logos/logo-epl.png";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { getNewsDb } from "../../../temp/news-db";
import NewsBlock from "./NewsBlock";
import { array } from "yup";

const FeaturedNews = () => {
	const [dataNews, setDataNews] = useState({news: []});
	// const [obj, setobj] = useState({ field_1: "1", val: 0 });

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
	console.log(otherNews);



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
								<div
									className="news_img"
									style={{
										background: `url(${MU}) center center/cover no-repeat`,
										height: "369px",
									}}
								></div>

								<div className="news_info" style={{ paddingBottom: "3px" }}>
									<div className="title">{dataNews.news[0].title}</div>
									<div className="des">
										<h3>
											<Link to="/details">
												<ListItem
													button
													className="admin_nav_link"
													style={{ paddingLeft: "0" }}
												>
													{dataNews.news[0].description}
												</ListItem>
											</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
					)}

						<div className="right">
							<div className="row_colums">
								{otherNews.length > 0 && otherNews.map((data, idx) => (
									<div key={idx} className="box_colums">
										<div
											className="news_img"
											style={{
												background: `url(${MU}) center center/cover no-repeat`,
												height: "146px",
											}}
										></div>
										<div className="news_info">
											<div className="title">{data.title}</div>
											<div className="des_box_right">
												<p>LELE</p>
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
