import React, { useEffect, useState } from "react";
import PlayerCard from "../ultils/PlayerCard";
import { Slide } from "react-awesome-reveal";
import { Promise } from "core-js";

import { showErrorToast } from "../ultils/tools";
import { CircularProgress } from "@material-ui/core";
import { playersCollection } from "../../firebase";
import firebase from "../../firebase";

const TheTeam = () => {
	const [loading, setLoading] = useState(true);
	const [players, setPlayers] = useState(null);

	useEffect(() => {
		if (!players) {
			playersCollection
				.get()
				.then((snapshot) => {
					const players = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));

					let playerGetUrl = [];

					players.forEach((item, index) => {
						playerGetUrl.push(
							new Promise((resolve, reject) => {
								console.log(firebase.storage().ref("player").child(item.image));
								firebase
									.storage()
									.ref("player")
									.child(item.image)
									.getDownloadURL()
									.then((url) => {
										//console.log(url);
										players[index].url = url;
                    //console.log((players[index].url = url));
										resolve();
									})
									.catch((error) => {
                    console.log(error, 'lele')
										reject();
									});
							})
						);
					});

					Promise.all(playerGetUrl).then(() => {
						setPlayers(players);
					});
				})
				.catch((error) => {
					showErrorToast("Sorry try again later");
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [players]);
  

	const showPlayerByCategory = (category) =>
		players
			? players.map((player, i) => {
					return player.position === category ? (
						<Slide left key={player.id} triggerOnce>
							<div className="item">
								<PlayerCard
									number={player.number}
									name={player.name}
									lastname={player.lastname}
									bck={player.url}
								/>
							</div>
						</Slide>
					) : null;
			  })
			: null; 
  

	return (
		<div className="the_team_container">
			{loading ? (
				<div className="progress">
					<CircularProgress />
				</div>
			) : (
				<div>
					<div className="team_category_wrapper">
						<div className="title">Keepers</div>
						<div className="team_cards">{showPlayerByCategory("Keeper")}</div>
					</div>

					<div className="team_category_wrapper">
						<div className="title">Defence</div>
						<div className="team_cards">{showPlayerByCategory("Defence")}</div>
					</div>

					<div className="team_category_wrapper">
						<div className="title">Midfield</div>
						<div className="team_cards">{showPlayerByCategory("Midfield")}</div>
					</div>

					<div className="team_category_wrapper">
						<div className="title">Strikers</div>
						<div className="team_cards">{showPlayerByCategory("Striker")}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TheTeam;
