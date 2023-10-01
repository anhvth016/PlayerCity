import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonStar = () => {
	return (
		<div className="see_more">
			<Button
				disableElevation
				variant="outlined"
				component={Link}
				to={"/the-team"}
				style={{border: "none"}}
				className="seemore"
			>
			<p className="button_seemore">+ Xem thêm</p>
			</Button>
		</div>
	);
};
export default ButtonStar;