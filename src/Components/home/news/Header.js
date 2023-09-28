import React from "react";

const Header = () => {
	return (
		<div class=" width_common">
			<div className="container header-content">
				<ul class="breadcrumb" data-campaign="Header">
					<li>Thể thao</li>
					<li className="breadcrumb_child">Bóng đá</li>
					<li className="breadcrumb_child">Ngoại hạng Anh</li>
					<span id="parentCateDetail" data-cate="1002580"></span>
					<span id="site-sub-id" data-cate="1002580"></span>
				</ul>
				<span class="date">Thứ hai, 25/9/2023, 18:59 (GMT+7)</span>
			</div>
		</div>
	);
};
export default Header;
