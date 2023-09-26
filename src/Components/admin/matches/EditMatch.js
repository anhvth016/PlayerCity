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

const EditMatch = (props) => {
	const [loading, setLoading] = useState(false);
	const [formType, setFormType] = useState("");
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
		console.log(teams);
		teams.forEach((team) => {
			if (team.shortName === data.local) {
				data["localThmb"] = team.thmb;
			}
			if (team.shortName === data.away) {
				data["awayThmb"] = team.thmb;
			}
		});
		matchesCollection
			.doc(props.match.params.matchid)
			.update(data)
			.then(() => {
				showSuccessToast("Trận đấu được sửa thành công.");
			})
			.catch((error) => {
				showErrorToast("Sửa trận đấu thất bại", error);
			}).finally(() => {
        setLoading(false)
      })
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

	useEffect(() => {
		const param = props.match.params.matchid;
		if (param) {
			/// edit
			matchesCollection
				.doc(param)
				.get()
				.then((snapshot) => {
					if (snapshot.data()) {
						setFormType("edit");
						setValues(snapshot.data());
					} else {
						showErrorToast("No records found");
					}
				});
		} else {
			// add
			setFormType("add");
			setValues(defaultValues);
		}
	}, [props.match.params.matchid]);

	return (
		<AdminLayout title="Chỉnh sửa trận đấu">
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
							<h4>Result local</h4>
							<FormControl error={selectIsError(formik, "local")}>
								<Select
									id="local"
									name="local"
									variant="outlined"
									displayEmpty
									{...formik.getFieldProps("local")}
								>
									<MenuItem value="" disabled>
										Select a team
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
							<h4>Result away</h4>
							<FormControl error={selectIsError(formik, "away")}>
								<Select
									id="away"
									name="away"
									variant="outlined"
									displayEmpty
									{...formik.getFieldProps("away")}
								>
									<MenuItem value="" disabled>
										Select a team
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
										<MenuItem value="yes">Yes</MenuItem>
										<MenuItem value="no">No</MenuItem>
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
								Sửa
							</Button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};

export default EditMatch;
