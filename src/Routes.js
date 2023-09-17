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


const Routes = ({user}) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Route path="/admin-players" exact component={AuthGuard(AdminPlayers)} />
			<Route
				path="/admin-players/add-player"
				exact
				component={AuthGuard(AddPlayers)}
			/>
			
			<Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
			<Route
				path="/sign_in"
				exact
				component={(props) => <SignIn {...props} user={user} />}
			/>
			<Route path="/" exact component={Home} />
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
