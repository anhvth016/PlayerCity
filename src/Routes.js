import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import Details from "./Components/home/news/detail-news/Details";
import StarDetail from "./Components/home/star-players/StarDetail";
import StarPlayers from "./Components/home/star-players/StarPlayers";
import NewsManager from "./Components/admin/newsManager/NewsManager";

const Routes = ({ user }) => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />

			<Route path="/star" exact component={StarPlayers} />
			<Route path="/star/star-details/:id" exact component={StarDetail} />

			<Route path="/news" exact component={News} />
			<Route path="/news/details/:id" exact component={Details} />

			<Route path="/the-team" exact component={TheTeam} />
			<Route path="/the-matches" exact component={TheMatches} />
			<Route path="/news-manager" exact component={NewsManager} />
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

			<Route
				path="/sign_in"
				exact
				component={(props) => <SignIn {...props} user={user} />}
			/>
			<Header user={user} />
			<Route
				path="/admin-matches/add-match"
				exact
				component={AuthGuard(AddMatch)}
			/>

			{/* <Route component={NotFound} /> */}
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
