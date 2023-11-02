import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
	showErrorToast,
	showSuccessToast,
	textErrorHelper,
	selectErrorHelper,
	selectIsError,
} from "../../ultils/tools";
import {
	TextField,
	Select,
	MenuItem,
	FormControl,
	Button,
} from "@material-ui/core";

import { matchesCollection, teamsCollection } from "../../../firebase";

const defaultValues = {
	date: "",
	local: "",
	resultLocal: "",
	away: "",
	resultAway: "",
	referee: "",
	stadium: "",
	result: "",
	final: "",
};

const AddMatch = (props) => {
	const [loading, setLoading] = useState(false);
	const [teams, setTeams] = useState(null);
	const [values, setValues] = useState(defaultValues);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: values,
		validationSchema: Yup.object({
			date: Yup.string().required("This input is required"),
			local: Yup.string().required("This input is required"),
			resultLocal: Yup.number()
				.required("This input is required")
				.min(0, "The minimum is 0")
				.max(99, "The maximum is 30"),
			away: Yup.string().required("This input is required"),
			resultAway: Yup.number()
				.required("This input is required")
				.min(0, "The minimum is 0")
				.max(99, "The maximum is 30"),
			referee: Yup.string().required("This input is required"),
			stadium: Yup.string().required("This input is required"),
			result: Yup.mixed()
				.required("This input is required")
				.oneOf(["W", "D", "L", "n/a"]),
			final: Yup.mixed()
				.required("This input is required")
				.oneOf(["yes", "no"]),
		}),
		onSubmit: (values) => {
			// submit form
			submitForm(values);
		},
	});

	const submitForm = (values) => {
		const data = values;
		teams.forEach((team) => {
			if (team.shortName === data.local) {
				data["localThmb"] = team.thmb;
			}
			if (team.shortName === data.away) {
				data["awayThmb"] = team.thmb;
			}
		});
		matchesCollection
			.add(values)
			.then(() => {
				showSuccessToast("Thêm trận đấu thành công.");
				formik.resetForm();
				props.history.push("/admin-matches");

			})
			.catch((error) => {
				showErrorToast("Không thể thêm trận đấu", error);
			})
			.finally(() => {
				setLoading(true);
			});
	};
	const showTeams = () =>
		teams
			? teams.map((item) => (
					<MenuItem key={item.id} value={item.shortName}>
						{item.shortName}
					</MenuItem>
			  ))
			: null;

	useEffect(() => {
		if (!teams) {
			teamsCollection
				.get()
				.then((snapshot) => {
					const teams = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setTeams(teams);
				})
				.catch((error) => {
					showErrorToast(error);
				});
		}
	}, [teams]);

	return (
		<AdminLayout title="Trận đấu">
			<div className="editmatch_dialog_wrapper">
				<div>
					<form onSubmit={formik.handleSubmit}>
						<div>
							<h4>Chọn ngày</h4>
							<FormControl>
								<TextField
									id="date"
									name="date"
									type="date"
									variant="outlined"
									{...formik.getFieldProps("date")}
									{...textErrorHelper(formik, "date")}
								/>
							</FormControl>
						</div>

						<hr />

						<div>
							<h4>Thi đấu trên sân nhà</h4>
							<FormControl error={selectIsError(formik, "local")}>
								<Select
									id="local"
									name="local"
									variant="outlined"
									displayEmpty
									{...formik.getFieldProps("local")}
								>
									<MenuItem value="" disabled>
										Chọn đội bóng
									</MenuItem>
									{showTeams()}
								</Select>
								{selectErrorHelper(formik, "local")}
							</FormControl>

							<FormControl style={{ marginLeft: "10px" }}>
								<TextField
									id="resultLocal"
									name="resultLocal"
									type="number"
									variant="outlined"
									{...formik.getFieldProps("resultLocal")}
									{...textErrorHelper(formik, "resultLocal")}
								/>
							</FormControl>
						</div>

						<div>
							<h4>Thi đấu trên sân khách</h4>
							<FormControl error={selectIsError(formik, "away")}>
								<Select
									id="away"
									name="away"
									variant="outlined"
									displayEmpty
									{...formik.getFieldProps("away")}
								>
									<MenuItem value="" disabled>
										Chọn đội bóng
									</MenuItem>
									{showTeams()}
								</Select>
								{selectErrorHelper(formik, "away")}
							</FormControl>

							<FormControl style={{ marginLeft: "10px" }}>
								<TextField
									id="resultAway"
									name="resultAway"
									type="number"
									variant="outlined"
									{...formik.getFieldProps("resultAway")}
									{...textErrorHelper(formik, "resultAway")}
								/>
							</FormControl>
						</div>

						<hr />

						<div>
							<h4>Thông tin trận đấu</h4>
							<div className="mb-5">
								<FormControl error={selectIsError(formik, "final")}>
									<Select
										id="final"
										name="final"
										variant="outlined"
										displayEmpty
										{...formik.getFieldProps("final")}
									>
										<MenuItem value="" disabled>
											Trận đấu đã bắt đầu ?
										</MenuItem>
										<MenuItem value="yes">Đã chơi</MenuItem>
										<MenuItem value="no">Chưa chơi</MenuItem>
									</Select>
									{selectErrorHelper(formik, "final")}
								</FormControl>

								<FormControl style={{ marginLeft: "10px" }}>
									<TextField
										id="referee"
										name="referee"
										variant="outlined"
										placeholder="Trọng tài"
										displayEmpty
										{...formik.getFieldProps("referee")}
										{...textErrorHelper(formik, "referee")}
									/>
								</FormControl>
							</div>

							<div className="mb-5">
								<FormControl error={selectIsError(formik, "result")}>
									<Select
										id="result"
										name="result"
										variant="outlined"
										displayEmpty
										{...formik.getFieldProps("result")}
									>
										<MenuItem value="" disabled>
											Kết quả thi đấu
										</MenuItem>
										<MenuItem value="W">Thắng</MenuItem>
										<MenuItem value="D">Hoà</MenuItem>
										<MenuItem value="L">Thua</MenuItem>
										<MenuItem value="n/a">N/a</MenuItem>
									</Select>
									{selectErrorHelper(formik, "result")}
								</FormControl>

								<FormControl style={{ marginLeft: "10px" }}>
									<TextField
										id="stadium"
										name="stadium"
										variant="outlined"
										placeholder="Sân vận động"
										{...formik.getFieldProps("stadium")}
										{...textErrorHelper(formik, "stadium")}
									/>
								</FormControl>
							</div>

							<Button
								type="submit"
								variant="contained"
								color="primary"
								disabled={loading}
							>
								Thêm trận đấu
							</Button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};

export default AddMatch;
