import React from "react";
import Animation from "./animation/Animation";
import Enroll from "./enroll/Enroll";

const Promotion = () => {
	return (
		<div className="promotion_wrapper">
			<div className="container">
				<Animation /> 
        <Enroll />
			</div>
		</div>
	);
};
export default Promotion;
