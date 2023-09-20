import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Button,
	FormControl,
	MenuItem,
	Select,
	TextField,
} from "@material-ui/core";
import {
	textErrorHelper,
	selectErrorHelper,
	selectIsError,
	showErrorToast,
	showSuccessToast,
} from "../../../ultils/tools";

import AdminLayout from "../../../../Hoc/adminLayout/AdminLayout";
import { playersCollection } from "../../../../firebase";

const defaultValues = {
	name: "",
	lastname: "",
	number: "",
	position: "",
};
const EditPlayers = (props) => {
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState(defaultValues);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: values,
		validationSchema: Yup.object({
			name: Yup.string().required("Trường tên bắt buộc"),
			lastname: Yup.string().required("Trường lastname bắt buộc"),
			number: Yup.string()
				.required("Trường số bắt buộc")
				.min(0, "Số nhỏ nhất là 0")
				.max(100, "Số lớn nhất là 100"),
			position: Yup.string().required("Trường vị trí bắt buộc"),
		}),
		onSubmit: (values) => {
			playersCollection
				.doc(props.match.params.playerid)
				.update(values)
				.then(() => {
					showSuccessToast("Player đã được update.");
					props.history.push("/admin-players");
				})
				.catch((error) => {
					showErrorToast(error);
				})
				.finally(() => {
					setLoading(false);
				});
		},
	});

	useEffect(() => {
		const getId = props.match.params.playerid;
		if (getId) {
			playersCollection
				.doc(getId)
				.get()
				.then((snapshot) => {
					if (snapshot.data()) {
						setValues(snapshot.data());
					} else {
						showErrorToast("Sorry, nothing was found");
					}
				})
				.catch((error) => {
					showErrorToast(error);
				});
		}
	}, [props.match.params.playerid]);
	return (
		<AdminLayout title="Edit Players">
			<div className="editplayers_dialog_wrapper">
				<div>
					<form onSubmit={formik.handleSubmit}>
						image
						<h4>Player Info</h4>
						<div className="mb-5">
							<FormControl>
								<TextField
									id="name"
									name="name"
									variant="outlined"
									placeholder="Add firstname"
									{...formik.getFieldProps("name")}
									{...textErrorHelper(formik, "name")}
								/>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl>
								<TextField
									id="lastname"
									name="lastname"
									variant="outlined"
									placeholder="Add lastname"
									{...formik.getFieldProps("lastname")}
									{...textErrorHelper(formik, "lastname")}
								></TextField>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl>
								<TextField
									id="number"
									name="number"
									type="number"
									variant="outlined"
									placeholder="Add number"
									{...formik.getFieldProps("number")}
									{...textErrorHelper(formik, "number")}
								></TextField>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl error={selectIsError(formik, "position")}>
								<Select
									id="position"
									name="position"
									variant="outlined"
									displayEmpty
									{...formik.getFieldProps("position")}
								>
									<MenuItem value="" disabled>
										Select a position
									</MenuItem>
									<MenuItem value="Keeper">Keeper</MenuItem>
									<MenuItem value="Defence">Defence</MenuItem>
									<MenuItem value="Midfield">Midfield</MenuItem>
									<MenuItem value="Striker">Striker</MenuItem>
								</Select>
								{selectErrorHelper(formik, "position")}
							</FormControl>
						</div>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={loading}
						>
							Edit Player
						</Button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};
export default EditPlayers;
