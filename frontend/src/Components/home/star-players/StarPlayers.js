import React from "react";
import { TagMatches } from "../../ultils/tools";
import MU from "../../../resources/images/test/co-giao.png";
import BreadCrumb from "../../common/BreadCrumb";

const StarPlayers = () => {
	return (
		<div className="star_wrapper">
			<div className="container">
				<BreadCrumb />
				<div className="star_header">
					<TagMatches
						size="30px"
						color="#252525"
						font="Roboto, sans-serif"
						borderBottom="1px solid rgb(227, 227, 227)"
					>
						<div style={{ fontWeight: "700", padding: "5px 0" }}>
							Ngôi sao thể thao11111111
						</div>
					</TagMatches>
				</div>
				<div className="star_home">
					<div className="left">
						<div className="star_box">
							<div
								className="news_img"
								style={{
									background: `url(${MU}) center center/cover no-repeat`,
									height: "481px",
								}}
							></div>

							<div className="star_info">
								<div className="title">
									{/* <Link to={`/news/details/${dataNews.news[0].id}`}> */}
									Ibrahimovic bảo vệ nhà Glazer ở MU, chê Ronaldo dạt sang Saudi
									Arabia11111111111{/* </Link> */}
								</div>
							</div>
						</div>
					</div>

					<div className="right">
						<div className="star_colums">
							<div className="star_box_right">
								<div className="star_img">
									<img src={MU} />
								</div>
								<div className="news_info">
									<p className="title">
										Tranh cãi Messi chấn thương, ĐT Argentina vẫn triệu tập đá
										vòng loại World Cup
									</p>
									{/* <div className="star_des">
										<p>Đây là đài truyền hình việt nam </p>
									</div> */}
								</div>
							</div>

							<div className="star_box_right">
								<div className="star_img">
									<img src={MU} />
								</div>
								<div className="news_info">
									<p className="title">
										Tranh cãi Messi chấn thương, ĐT Argentina vẫn triệu tập đá
										vòng loại World Cup
									</p>
									{/* <div className="star_des">
										<p>Đây là đài truyền hình việt nam </p>
									</div> */}
								</div>
							</div>
							<div className="star_box_right">
								<div className="star_img">
									<img src={MU} />
								</div>
								<div className="news_info">
									<p className="title">
										Tranh cãi Messi chấn thương, ĐT Argentina vẫn triệu tập đá
										vòng loại World Cup
									</p>
									{/* <div className="star_des">
										<p>Đây là đài truyền hình việt nam </p>
									</div> */}
								</div>
							</div>
							<div className="star_box_right">
								<div className="star_img">
									<img src={MU} />
								</div>
								<div className="news_info">
									<p className="title">
										Tranh cãi Messi chấn thương, ĐT Argentina vẫn triệu tập đá
										vòng loại World Cup
									</p>
									{/* <div className="star_des">
										<p>Đây là đài truyền hình việt nam </p>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="latest_warpper">
					<div className="latest_home">
						<div className="latest_box">
							<div className="latest_img">
								<img src={MU} style={{ width: "100%", height: "100%" }} />
							</div>
							<div className="latest_info">
								<div className="title">
									<h3 style={{ margin: "0" }}>
										Bi hài Ramos đá phản giúp Barca thắng, được "kiến tạo" bởi
										"người xưa"
									</h3>
								</div>
								<div className="detail">
									<p>
										Hiện tại đang có 3 tin đồn cực kỳ đáng chú ý liên quan tới
										Cristiano Ronaldo trong đó có cả Messi và Man City.
									</p>
								</div>
								<div className="time">
									<p>Asiad 2023 | ("DD/MM/YYYY | hh:mm")</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default StarPlayers;
