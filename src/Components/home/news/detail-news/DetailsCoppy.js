import React from "react";


import RelatedNews from "./RelatedNews";
import Text from "./Details";

const Details = () => {
  return (
		<div className="home_details_wrapper ">
			<div className="container">
				<div className="home_wrapper">
					{/* detai */}
					{/* <div className="description">
						<span className="description_title">Anh - </span>
						<span className="description_text">
							ANHCĐV Chelsea chê HLV Mauricio Pochettino yếu về chiến thuật và
							đang kéo lùi đội bóng, giống nhà cầm quân mùa trước Graham Potter
							. "Potter 2.0 đã có mặt rồi các bạn ạ", một CĐV viết trên mạng xã
							hội X ngày 25/9 - một ngày sau khi Chelsea thua Aston Villa ở vòng
							6 Ngoại hạng Anh. "Hãy sẵn sàng để xem phản ứng mỗi tuần". Graham
							Potter là HLV bị Chelsea sa thải sau gần bảy tháng làm việc mùa
							trước, dù từng được chờ đợi sẽ giúp lột xác đội bóng như kỳ vọng
							với Pochettino từ hè này. Một CĐV khác thì chê Pochettino yếu về
							chiến thuật, không có khả năng đưa ra quyết định táo bạo trong
							hoàn cảnh khó khăn, và đang kéo lùi đội bóng. "Thiago Silva phải
							bị loại bỏ, Levi Colwill đúng ra phải đá trung vệ, còn Cole Palmer
							đá chính thay Conor Gallagher", một fan viết trên X. "Và
							Pochettino phải ra đi".
						</span>
					</div>
					<div className="details_images">
						<img src={NewsImg} />
						<div className="img_title">
							Pochettino thất vọng trong trận Chelsea thua Aston Villa 0-1 hôm
							24/9. Ảnh: PA
						</div>
					</div>
					<div className="description">
						<span className="description_title">Anh - </span>
						<span className="description_text">
							ANHCĐV Chelsea chê HLV Mauricio Pochettino yếu về chiến thuật và
							đang kéo lùi đội bóng, giống nhà cầm quân mùa trước Graham Potter
							. "Potter 2.0 đã có mặt rồi các bạn ạ", một CĐV viết trên mạng xã
							hội X ngày 25/9 - một ngày sau khi Chelsea thua Aston Villa ở vòng
							6 Ngoại hạng Anh. "Hãy sẵn sàng để xem phản ứng mỗi tuần". Graham
							Potter là HLV bị Chelsea sa thải sau gần bảy tháng làm việc mùa
							trước, dù từng được chờ đợi sẽ giúp lột xác đội bóng như kỳ vọng
							với Pochettino từ hè này. Một CĐV khác thì chê Pochettino yếu về
							chiến thuật, không có khả năng đưa ra quyết định táo bạo trong
							hoàn cảnh khó khăn, và đang kéo lùi đội bóng. "Thiago Silva phải
							bị loại bỏ, Levi Colwill đúng ra phải đá trung vệ, còn Cole Palmer
							đá chính thay Conor Gallagher", một fan viết trên X. "Và
							Pochettino phải ra đi".
						</span>
					</div>{" "} */}
					{/* <div className="details_author">
						<strong>Thanh Quý </strong>
						(theo Sports Mail)
					</div> */}

					<Text />
					<RelatedNews />
				</div>
			</div>
		</div>
	);
}
export default Details;