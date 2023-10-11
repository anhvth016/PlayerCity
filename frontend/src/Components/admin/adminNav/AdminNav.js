import React from "react";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { logoutHandler } from "../../ultils/tools";

const AdminNav = (props) => {
	const linkItem = [
		{
			title: "Tin tức",
			linkTo: "/news-manager",
		},
		{
			title: "Trận đấu",
			linkTo: "/admin-matches",
		},
		{
			title: "Ngôi sao",
			linkTo: "/admin-players",
		},
	];

	const renderItems = () =>
		linkItem.map((items) => (
			<Link to={items.linkTo} key={items.title}>
				<ListItem button className="admin_nav_link">
					{items.title}
				</ListItem>
			</Link>
		));
	return (
		<div>
			{renderItems()}
			<ListItem
				button
				className="admin_nav_link"
				onClick={() => logoutHandler()}
			>
				Đăng xuất
			</ListItem>
		</div>
	);
};
export default withRouter(AdminNav);
