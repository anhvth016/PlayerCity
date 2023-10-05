import React from "react";

const BreadCrumb = () => {
	return (
		<div className=" width_common">
			<div className="container header-content">
				<ul className="breadcrumb" data-campaign="Header">
					<li>Thể thao</li>
					<li className="breadcrumb_child">Bóng đá</li>
					<li className="breadcrumb_child">Ngoại hạng Anh</li>
					<span id="parentCateDetail" data-cate="1002580"></span>
					<span id="site-sub-id" data-cate="1002580"></span>
				</ul>
				
			</div>
		</div>
	);
};
export default BreadCrumb;
