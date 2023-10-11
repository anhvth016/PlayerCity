import React from "react";
import BckNews from "../../../resources/images/logos/bck-news.png";
// import Details from "./detail-news/Details";
import FeaturedNews from "./FeaturedNews";

const News = () => {
  return (
		<>
			<div
				className="home_news_wrapper"
				style={{ background: `url(${BckNews}) center center/cover no-repeat` }}
			>
				<div className="news_header">
					<h1 style={{ padding: "0 20px" }}>
						<p style={{ color: "#1E2C87", fontSize: '36px' }}>Thể Thao</p>
					</h1>
				</div>
				<div className="news_home"></div>
			</div>
			<FeaturedNews />
		</>
	);
}
export default News;
