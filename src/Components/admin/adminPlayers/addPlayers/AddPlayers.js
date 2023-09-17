import React, { useState } from "react";
import AdminLayout from "../../../../Hoc/adminLayout/AdminLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

const defaultValues = {
	name: "",
	lastname: "",
	number: "",
	position: "",
};
const AddPlayers = () => {
	const [values, setValues] = useState(defaultValues);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: values, // tsao truyeen initvalue thong qua state ma k truyen thang initvalue vafo day
		validationSchema: Yup.object({
			name: Yup.string().required("Trường tên bắt buộc"),
			lastname: Yup.string().required("Trường lastname bắt buộc"),
			number: Yup.string()
				.required("Trường số bắt buộc")
				.min("0", "Số nhỏ nhất là 0")
				.max("100", "Số lớn nhất là 100"),
			position: Yup.string().required("Trường vị trí bắt buộc"),
		}),
	});
	return <AdminLayout>Add Players</AdminLayout>;
};
export default AddPlayers;
