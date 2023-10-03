import React, { useEffect, useState } from "react";
import NewsImg from "../../../resources/images/test/news.png";
import BreadCrumb from "../../ultils/BreadCrumb";
import { getPlayedId } from "../../../temp/news-db";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import parse from "html-react-parser";
import RelatedNews from "../news/detail-news/RelatedNews";


const StarDetail = () => {
	const [starDetail, setStarDetail] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getPlayedId(id)
			.then((response) => {
				setStarDetail(response);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	let date = null;
	if (starDetail) {
		date = moment(starDetail.published_date);
		date.locale("vi");
	}

	return (
		<>
			<div className="home_details_wrapper ">
				<div className="container">
					<div className="home_wrapper">
						{starDetail && (
							<div className="details_wrapper">
								<div className="header_breadcrumb">
									<BreadCrumb />
									<span className="date">
										{date.format("dddd, DD/MM/YYYY, hh:mm")} (GMT + 7)
									</span>
								</div>
								<div className="details_title">{starDetail.title}</div>
								<div className="description">
									{parse(starDetail.description)}
								</div>
							</div>
						)}
						<RelatedNews />
					</div>
				</div>
			</div>
		</>
	);
};
export default StarDetail;
