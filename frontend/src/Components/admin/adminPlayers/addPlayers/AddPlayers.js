import React, { useState } from "react";
import AdminLayout from "../../../../Hoc/adminLayout/AdminLayout";
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
import { playersCollection } from "../../../../firebase";
import ImageUploader from "../../../ultils/imageUpload";

const defaultValues = {
	name: "",
	lastname: "",
	number: "",
	position: "",
	image: "",
};
const AddPlayers = (props) => {
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState(defaultValues);
	const [updateImage, setUpdateImage] = useState("");

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
			image: Yup.string().required("Trường ảnh bắt buộc"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			playersCollection
				.add(values)
				.then(() => {
					showSuccessToast("Player được thêm thành công.");
					formik.resetForm();
					props.history.push("/admin-players");
				})
				.catch((error) => {
					showErrorToast(error);
				});
		},
	});

	const updateImageName = (filename) => {
		formik.setFieldValue("image", filename);
	};
	return (
		<AdminLayout title="Add Players">
			<div className="editplayers_dialog_wrapper">
				<div>
					<form onSubmit={formik.handleSubmit}>
						<FormControl error={selectIsError(formik, "image")}>
							<ImageUploader
								dir="player"
								filename={(filename) => updateImageName(filename)}
							/>
							{selectErrorHelper(formik, "image")}
						</FormControl>
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
							Add Player
						</Button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};
export default AddPlayers;
