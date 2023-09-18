import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";
import { playersCollection } from "../../../firebase";
import { Link } from "react-router-dom";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	CircularProgress,
} from "@material-ui/core";
import { showErrorToast } from "../../ultils/tools";

const AdminPlayers = () => {
	const [lastVisible, setLastVisible] = useState(null);
	const [adminLoading, setAdminLoading] = useState(false);
	const [adminPlayers, setAdminPlayers] = useState(null);

	useEffect(() => {
		if (!adminPlayers) {
			setAdminLoading(true);
			playersCollection
				.limit(5)
				.get()
				.then((snap) => {
					const lastVisible = snap.docs[snap.docs.length - 1];
					const players = snap.docs.map((player) => ({
						id: player.id,
						...player.data(),
					}));
					setLastVisible(lastVisible);
					setAdminPlayers(players);
				})
				.catch((error) => {
					showErrorToast(error);
				})
				.finally(() => {
					setAdminLoading(false);
				});
		}
	}, [adminPlayers]);

	const loadMorePlayers = () => {
		if (lastVisible) {
			setAdminLoading(true);
			playersCollection
				.startAfter(lastVisible)
				.limit(3)
				.get()
				.then((snap) => {
					const lastVisible = snap.docs[snap.docs.length - 1];
					const newPlayers = snap.docs.map((player) => ({
						id: player.id,
						...player.data(),
					}));
					setLastVisible(lastVisible);
					setAdminPlayers([...adminPlayers, ...newPlayers]);
				})
				.catch((error) => {
					showErrorToast(error);
				})
				.finally(() => {
					setAdminLoading(false);
				});
		} else {
			showErrorToast("Không còn gì để tải.");
		}
	};

	return (
		<AdminLayout title="The players">
			<div className="mb-5">
				<Button
					disableElevation
					variant="outlined"
					component={Link}
					to={"/admin-players/add-player"}
				>
					Add Player
				</Button>
			</div>
			<Paper className="mb-5">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Fist name</TableCell>
							<TableCell>Last name</TableCell>
							<TableCell>Number</TableCell>
							<TableCell>Position</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{adminPlayers
							? adminPlayers.map((player, i) => (
									<TableRow key={player.id}>
										<TableCell>
											<Link to={`/admin-players/edit-player/${player.id}`}>
												{player.name}
											</Link>
										</TableCell>
										<TableCell>
											<Link to={`/admin-players/edit-player/${player.id}`}>
												{player.lastname}
											</Link>
										</TableCell>
										<TableCell>{player.number}</TableCell>
										<TableCell>{player.position}</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</Paper>
			<Button
				variant="contained"
				color="primary"
				onClick={() => loadMorePlayers()}
				disabled={adminLoading}
			>
				Load more
			</Button>

			<div className="admin_progress">
				{adminLoading ? (
					<CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
				) : null}
			</div>
		</AdminLayout>
	);
};
export default AdminPlayers;
