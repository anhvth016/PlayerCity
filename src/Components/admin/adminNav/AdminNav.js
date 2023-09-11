import React from "react";
import {Link ,withRouter} from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import { logoutHandler } from "../../ultils/tools";


const AdminNav = (props) => {
  //console.log(props)

  const linkItem = [
		{
			title: "Matches",
			linkTo: "/admin-matches",
		},
		{
			title: "Players",
			linkTo: "/admin-players",
		},
	];

  const renderItems = () => (
   
    linkItem.map(items => (
      <Link to={items.linkTo} key={items.title}>
        <ListItem button className="admin_nav_link">{items.title}</ListItem>
      </Link>
    ))
  )
  return (
		<div>
			{renderItems()}
			<ListItem button className="admin_nav_link" onClick={() => logoutHandler()}>
				Log out
			</ListItem>
		</div>
	);
}
export default withRouter(AdminNav);