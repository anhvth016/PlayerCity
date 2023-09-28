import React from "react";
import MU from "../../../resources/images/test/mu.png"
import Logo from "../../../resources/images/logos/logo-epl.png"
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const FeaturedNews = () => {
	return (
		<div className="featured_news_wrapper">
			<div className="news_container">
				<div featured_news_header>
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
								<div className="title">Manchester United</div>
								<div className="des">
									<h3>
										<Link to="/details">
											<ListItem button className="admin_nav_link">
												MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra,
												tình hình ra sao?
											</ListItem>
										</Link>
									</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="right">
						<div className="right_box">
							<div className="box_left">
								<div className="news_box">
									<div
										className="news_img"
										style={{
											background: `url(${MU}) center center/cover no-repeat`,
											height: "146px",
										}}
									></div>
									<div className="news_info">
										<div className="title">Manchester United</div>
										<div className="des_box_right">
											<p>
												MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra,
												tình hình ra sao?
											</p>
										</div>
									</div>
								</div>

								<div className="news_box">
									<div
										className="news_img"
										style={{
											background: `url(${MU}) center center/cover no-repeat`,
											height: "146px",
										}}
									></div>
									<div className="news_info">
										<div className="title">Manchester United</div>
										<div className="des_box_right">
											<p>
												MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra,
												tình hình ra sao?
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="box_right">
								<div className="news_box">
									<div
										className="news_img"
										style={{
											background: `url(${MU}) center center/cover no-repeat`,
											height: "146px",
										}}
									></div>
									<div className="news_info">
										<div className="title">Manchester United</div>
										<div className="des_box_right">
											<p>
												MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra,
												tình hình ra sao?
											</p>
										</div>
									</div>
								</div>
								<div className="news_box">
									<div
										className="news_img"
										style={{
											background: `url(${MU}) center center/cover no-repeat`,
											height: "146px",
										}}
									></div>
									<div className="news_info">
										<div className="title">Manchester United</div>
										<div className="des_box_right">
											<p>
												MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra,
												tình hình ra sao?
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeaturedNews;
