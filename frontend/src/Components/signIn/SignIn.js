import React, { useState } from "react";
import firebase from "../../firebase";

import { CircularProgress } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";
import { showErrorToast, showSuccessToast } from "../ultils/tools";
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {

	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Email không hợp lệ.")
				.required("Bắt buộc nhập email."),
			password: Yup.string().required("Bắt buộc nhập mật khẩu"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			submitForm(values);
		},
	});

	const submitForm = (values) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(values.email, values.password)
			.then(() => {
				showSuccessToast("Đăng nhập thành công");
				props.history.push("/dashboard");
			})
			.catch((error) => {
				setLoading(false);
				showErrorToast(error.message);
			});
	};

	return (
		<>
		{!props.user ?
			<div className="container">
				<div className="signin_wrapper" style={{ margin: "100px" }}>
					<form onSubmit={formik.handleSubmit}>
						<h2>Please login</h2>
						<input
							name="email"
							placeholder="Email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="error_label">{formik.errors.email}</div>
						) : null}

						<input
							placeholder="Nhập password"
							name="password"
							type="password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className="error_label">{formik.errors.password}</div>
						) : null}

						{loading ? (
							<CircularProgress color="secondary" className="progress" />
						) : (
							<button type="submit">Log in</button>
						)}
					</form>
				</div>
			</div> 
			: <Redirect to={"/dashboard"}/>}
		</>
	);
};

export default SignIn;
