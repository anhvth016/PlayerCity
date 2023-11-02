import React, { useEffect, useState } from "react";
import { matchesCollection } from "../../../firebase";
import {
	CircularProgress,
	Button,
	TableCell,
	TableRow,
	TableBody,
	TableHead,
	Table,
	Paper,
} from "@material-ui/core";
import { showErrorToast, showSuccessToast } from "../../ultils/tools";
import { Link } from "react-router-dom";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";

const AdminMatches = () => {
	const [matches, setMatches] = useState(null);
	const [loading, setLoading] = useState(false);
	const [lastVisible, setLastVisible] = useState(null);

	useEffect(() => {
		if (!matches) {
			setLoading(true);
			matchesCollection
				.limit(5)
				.get()
				.then((snap) => {
					const lastVisible = snap.docs[snap.docs.length - 1];
					const matches = snap.docs.map((match) => ({
						id: match.id,
						...match.data(),
					}));
					setLastVisible(lastVisible);
					setMatches(matches);
				})
				.catch((error) => {
					showErrorToast(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [matches]);

	const loadMoreMatches = () => {
		if (lastVisible) {
			setLoading(true);
			matchesCollection
				.startAfter(lastVisible)
				.limit(3)
				.get()
				.then((snap) => {
					const lastVisible = snap.docs[snap.docs.length - 1];
					const newMatches = snap.docs.map((match) => ({
						id: match.id,
						...match.data(),
					}));
					setLastVisible(lastVisible);
					setMatches([...matches, ...newMatches]);
				})
				.catch((error) => {
					showErrorToast(error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			showErrorToast("Không còn gì để tải.");
		}
	};

	const handleRemove = (id) => {
		if (id) {
			matchesCollection
				.doc(id)
				.delete()
				.then((snapshot) => {
					setMatches(snapshot);
					showSuccessToast("Xoá trận đấu thành công.")
				}).catch((error) => {
					showErrorToast("Xoá trận đấu thất bại.")
				});
		}
	};
	return (
		<AdminLayout title="Các trận đấu">
			<div className="mb-5">
				<Button
					disableElevation
					variant="outlined"
					component={Link}
					to={"/admin-matches/add-match"}
				>
					Thêm trận đấu
				</Button>
			</div>

			<Paper className="mb-5">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Ngày đấu</TableCell>
							<TableCell>Trận đấu giữa hai đội</TableCell>
							<TableCell>Kết quả</TableCell>
							<TableCell>Sân vận động</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{matches
							? matches.map((match) => (
									<TableRow key={match.id}>
										<TableCell>{match.date}</TableCell>
										<TableCell>
											{match.away} <strong>-</strong> {match.local}
										</TableCell>
										<TableCell>
											{match.resultAway} <strong>-</strong> {match.resultLocal}
										</TableCell>
										<TableCell>
											{match.stadium}
										</TableCell>
										<TableCell>
											<Link to={`/admin-matches/edit-match/${match.id}`}>
												<Button
													style={{
														backgroundColor: "#eee",
														marginRight: "10px",
													}}
												>
													Sửa
												</Button>
											</Link>
											<Button
												style={{
													backgroundColor: "red",
													color: "#ffff",
												}}
												onClick={() => handleRemove(match.id)}
											>
												Xoá
											</Button>
										</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</Paper>

			<Button
				variant="contained"
				color="primary"
				onClick={() => loadMoreMatches()}
				disabled={loading}
			>
				Xem thêm
			</Button>

			<div className="admin_progress">
				{loading ? (
					<CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
				) : null}
			</div>
		</AdminLayout>
	);
};
export default AdminMatches;