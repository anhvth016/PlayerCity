import React, { useContext, useEffect, useState } from "react";
import NewsImg from "../../../../resources/images/test/news.png";
import BreadCrumb from "../../../common/BreadCrumb";
import { getNewsDb, getNewsById } from "../../../../temp/news-db";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import RelatedNews from "./RelatedNews";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");
const Details = (props) => {
	const { id } = useParams();
	const [content, setContent] = useState(null);
	useEffect(() => {
		getNewsById(id)
			.then((resp) => {
				setContent(resp);
			})
			.catch((err) => console.log(err));
	}, [id]);

	let date = null;
	if (content) {
		date = moment(content.published_date);
		date.locale("vi");
		// date.format("LLLL")
	}

	// useEffect(() => {
	// 	getNewsDb().then((response) =>{
	// 		console.log(response);
	// 		Setcontent(response);
	// 	}).catch((error) => {
	// 		console.log(error)
	// 	})
	// }, [])

	return (
		<>
			<div className="home_details_wrapper ">
				<div className="container">
					<div className="home_wrapper">
						{content && (
							<div className="details_wrapper">
								<div className="header_breadcrumb">
									<BreadCrumb />
									<span className="date">
										{date.format("dddd, DD/MM/YYYY, hh:mm")}
										(GMT + 7)
										{/* // .format("dddd, DD/MM/YYYY hh:mm a")} */}
										{/* {content.published_date} */}
										{/* Thứ hai, 25/9/2023, 18:59 (GMT+7) */}
									</span>
								</div>
								<div className="details_title">{content.title}</div>
								<div className="description">{parse(content.description)}</div>
							</div>
						)}
						<RelatedNews />
					</div>
				</div>
			</div>
		</>
	);
};
export default Details;
