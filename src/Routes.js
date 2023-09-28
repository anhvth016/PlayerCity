import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./Hoc/Auth";


import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import SignIn from "./Components/signIn/SignIn";
import Dashboard from "./Components/admin/dashboard/Dashboard";
import AdminPlayers from "./Components/admin/adminPlayers/AdminPlayers";
import AddPlayers from "./Components/admin/adminPlayers/addPlayers/AddPlayers";
import EditPlayers from "./Components/admin/adminPlayers/editPlayers/EditPlayers";
import TheTeam from "./Components/the-team/TheTeam";
import AddMatch from "./Components/admin/matches/AddMatch";
import AdminMatches from "./Components/admin/matches/AdminMatches";
import EditMatch from "./Components/admin/matches/EditMatch";
import TheMatches from "./Components/the-matches/TheMatches";
import NotFound from "./Components/not-found/NotFound";
import News from "./Components/home/news/News";
import Details from "./Components/home/news/Details";

const Routes = ({user}) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Route
				path="/admin-matches/add-match"
				exact
				component={AuthGuard(AddMatch)}
			/>
			<Route path="/news" exact component={AuthGuard(News)} />
			<Route path="/details" exact component={AuthGuard(Details)} />
			<Route
				path="/admin-matches/edit-match/:matchid"
				exact
				component={AuthGuard(EditMatch)}
			/>
			<Route path="/admin-matches/" exact component={AuthGuard(AdminMatches)} />

			<Route path="/admin-players" exact component={AuthGuard(AdminPlayers)} />
			<Route
				path="/admin-players/add-player"
				exact
				component={AuthGuard(AddPlayers)}
			/>
			<Route
				path="/admin-players/edit-player/:playerid"
				exact
				component={AuthGuard(EditPlayers)}
			/>
			<Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
			<Route path="/the-team" exact component={TheTeam} />
			<Route path="/the-matches" exact component={TheMatches} />
			<Route
				path="/sign_in"
				exact
				component={(props) => <SignIn {...props} user={user} />}
			/>
			<Route path="/" exact component={Home} />
			{/* <Route component={NotFound} /> */}
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
