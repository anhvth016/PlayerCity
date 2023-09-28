import React from "react";


import RelatedNews from "./RelatedNews";
import Text from "./Text";

const Details = () => {
  return (
		<div className="home_details_wrapper ">
			<div className="container">
				<div className="home_wrapper">
					<Text />
					<RelatedNews />
				</div>
			</div>
		</div>
	);
}
export default Details;