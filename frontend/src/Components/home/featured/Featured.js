import React from "react";
import Stripes from "./stripes";
//import Test from "./Test"
import Text from "./Text";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const Featured = () => {
	return (
		<div className="featured_wrapper">
			<Stripes />

			{/* <Link to="/sign_in">
				<Button color="inherit"> */}
					<Text />
				{/* </Button>
			</Link> */}
		</div>
	);
};

export default Featured;
