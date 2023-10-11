import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@material-ui/core";
import { promotionsCollection } from "../../../../firebase";
import { showErrorToast, showSuccessToast } from "../../../ultils/tools";

const Enroll = () => {
	const [loadingEroll, setLoadingEroll] = useState(false);
	const formik = useFormik({
		initialValues: { email: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email")
				.required("The email is required"),
		}),

		onSubmit: (value, resetForm) => {
			setLoadingEroll(true);
			submitForm(value);
		},
	});

	 const submitForm = async (values) => {
			try {
				const isOnTheList = await promotionsCollection
					.where("email", "==", values.email)
					.get();

				if (isOnTheList.docs.length >= 1) {
					showErrorToast("sorry you are on the list already");
					setLoadingEroll(false);
					return false;
				}

				await promotionsCollection.add({ email: values.email });
				formik.resetForm();
				setLoadingEroll(false);
				showSuccessToast("Congratulation !!!:)");
			} catch (error) {
				showErrorToast(error);
			}
		};

	return (
		<Fade>
			<div className="enroll_wrapper">
				<form onSubmit={formik.handleSubmit}>
					<div className="enroll_title">Vui lòng nhập email</div>
					<div className="enroll_input">
						<input
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="Enter your email"
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="error_lable">{formik.errors.email} </div>
						) : null}

						{loadingEroll ? (
							<CircularProgress color="secondary" className="progress" />
						) : (
							<button type="submit">Enroll</button>
						)}
					</div>
				</form>
			</div>
		</Fade>
	);
};
export default Enroll;
