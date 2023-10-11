import { FormHelperText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";

import cityLogo from "../../resources/images/logos/manchester_city_logo.png";

export const CityLogo = (props) => {
	const template = (
		<div
			className="img_cover"
			style={{
				width: props.width,
				height: props.height,
				background: `url(${cityLogo}) no-repeat`,
			}}
		></div>
	);

	if (props.link) {
		return (
			<Link className="link_logo" to={props.linkTo}>
				{template}
			</Link>
		);
	} else {
		return template;
	}
};

export const TagMatches = (props) => {
	const template = (
		<div
			style={{
				background: props.bck ? props.bck : "#ffffff",
				fontSize: props.size ? props.size : "15px",
				color: props.color ? props.color : "#000000",
				borderBottom: props.borderBottom ? props.borderBottom : "none",
				// border: props.border ? props.border : "none",
				display: "inline-block",
				borderRadius: props.radius ? props.radius : "none",
				width: props.width ? props.width : "100%",
				marginTop: props.margin ? props.margin : "0",
				fontFamily: props.font ? props.font : "Righteous",
				...props.add,
			}}
		>
			{props.children}
		</div>
	);

	if (props.link) {
		return <Link to={props.linkTo}>{template}</Link>;
	} else {
		return template;
	}
};

//notification toast
export const showErrorToast = (message) => {
	toast.error(message, {
		position: toast.POSITION.TOP_RIGHT,
	});
};

export const showSuccessToast = (message) => {
	toast.success(message, {
		autoClose: 5000,
		position: toast.POSITION.TOP_RIGHT,
	});
};

// xư lý logout
export const logoutHandler = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			showSuccessToast("Đã đăng xuất.");
			console.log(11);
		})
		.catch((error) => {
			showErrorToast(error.message);
		});
};


//text error helper	
export const textErrorHelper = (formik, values) => ({
	error: formik.errors[values] && formik.touched[values],
	helperText:
		formik.errors[values] && formik.touched[values]
			? formik.errors[values]
			: null,
});

export const selectErrorHelper = (formik, values) => {
	if (formik.errors[values] && formik.touched[values]) {
		return <FormHelperText>{formik.errors[values]}</FormHelperText>;
	}
	return false;
};

export const selectIsError = (formik, values) => {
	return formik.errors[values] && formik.touched[values];
}