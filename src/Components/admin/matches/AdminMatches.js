import React, {useEffect, useState} from "react";
import { matchesCollection } from "../../../firebase";
import { CircularProgress, Button, TableCell, TableRow, TableBody, TableHead, Table, Paper } from "@material-ui/core";
import { showErrorToast } from "../../ultils/tools";
import { Link } from "react-router-dom";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";

const AdminMatches = () => {
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false)
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
  return (
		<AdminLayout title="The matches">
			<div className="mb-5">
				<Button
					disableElevation
					variant="outlined"
					component={Link}
					to={"/admin-matches/add-match"}
				>
					Add match
				</Button>
			</div>

			<Paper className="mb-5">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Match</TableCell>
							<TableCell>Result</TableCell>
							<TableCell>Final</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{matches
							? matches.map((match, i) => (
									<TableRow key={match.id}>
										<TableCell>{match.date}</TableCell>
										<TableCell>
											<Link to={`/admin-matches/edit-match/${match.id}`}>
												{match.away} <strong>-</strong> {match.local}
											</Link>
										</TableCell>
										<TableCell>
											{match.resultAway} <strong>-</strong> {match.resultLocal}
										</TableCell>
										<TableCell>
											{match.final === "Yes" ? (
												<span className="matches_tag_red">Final</span>
											) : (
												<span className="matches_tag_green">
													Not played yet
												</span>
											)}
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
				Load more
			</Button>

			<div className="admin_progress">
				{loading ? (
					<CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
				) : null}
			</div>
		</AdminLayout>
	);
}
export default AdminMatches;