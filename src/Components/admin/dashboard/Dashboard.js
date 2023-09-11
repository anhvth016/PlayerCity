import React from "react";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";

const Dashboard = () => {
  //console.log(props)
	return (
		<AdminLayout title="Dashboard">
      <div className="user_dashboard">This is your Dashboard</div>
    </AdminLayout>
	);
};
export default Dashboard;
