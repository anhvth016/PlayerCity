import React, { useEffect, useState } from "react";
import NewsImg from "../../../resources/images/test/news.png";
import BreadCrumb from "../../common/BreadCrumb";
import { getPlayedId } from "../../../temp/news-db";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import parse from "html-react-parser";
import RelatedNews from "../news/detail-news/RelatedNews";
import axios from "axios";
import { Markup } from "interweave";

const StarDetail = () => {
  const [starDetail, setStarDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_API_URL}/news/${id}`).then((res) => {
        console.log(res);
        setStarDetail(res.data);
      });
    }
  }, [id]);

  return (
    <>
      <div className="home_details_wrapper ">
        <div className="container">
          <div className="home_wrapper">
            {starDetail && (
              <>
                <div className="details_wrapper">
                  <div className="header_breadcrumb">
                    <BreadCrumb />
                    <span className="date">
                      {starDetail.publishedDate} (GMT + 7)
                    </span>
                  </div>
                  <div className="details_title">{starDetail.title}</div>
                  <div className="description">
                    {parse(starDetail.description)}
                  </div>
                </div>
                <div className="content_wrapper">
                  {starDetail.detail?.content && <Markup content={starDetail.detail?.content} />}
                </div>
              </>
            )}
            <RelatedNews />
          </div>
        </div>
      </div>
    </>
  );
};
export default StarDetail;
