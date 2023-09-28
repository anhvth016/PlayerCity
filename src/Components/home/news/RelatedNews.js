import React from "react";
import { TagMatches } from "../../ultils/tools";
import Start from "../../../resources/images/test/co-giao.png";


const RelatedNews = () => {
  return (
		<div className="related_news">
			<div className="home_related_news">
				<TagMatches
					size="20px"
					color="#252525"
					font="Roboto, sans-serif"
					border="1px solid #e3e3e3"
				>
					<div style={{ fontWeight: "500", lineHeight: "51px" }}>
						Tin liên quan
					</div>
				</TagMatches>
				<div className="description_text related_text">
					<div className="player_start">
						<div className="left">
							<div className="related_box">
								<div className="news_img">
									<img src={Start} style={{ width: "110px", height: "66px" }} />
								</div>
								<div className="news_info ">
									{/* <div className="title">Manchester United</div> */}
									<div className="des des_related">
										<p>
											MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình
											hình ra sao?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="description_text related_text">
					<div className="player_start">
						<div className="left">
							<div className="related_box">
								<div className="news_img">
									<img src={Start} style={{ width: "110px", height: "66px" }} />
								</div>
								<div className="news_info">
									{/* <div className="title">Manchester United</div> */}
									<div className="des des_related">
										<p>
											MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình
											hình ra sao?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="description_text related_text">
					<div className="player_start">
						<div className="left">
							<div className="related_box">
								<div className="news_img">
									<img src={Start} style={{ width: "110px", height: "66px" }} />
								</div>
								<div className="news_info">
									<div className="des des_related">
										<p>
											MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình
											hình ra sao?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RelatedNews;