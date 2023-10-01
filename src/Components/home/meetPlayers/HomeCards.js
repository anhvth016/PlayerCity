import React from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";
import ButtonStar from "./ButtonStar";
import Otamendi from "../../../resources/images/players/Otamendi.png";
import Raheem_Sterling from "../../../resources/images/players/Raheem_Sterling.png";
import Vincent_Kompany from "../../../resources/images/players/Vincent_Kompany.png";
import PlayerCard from "../../ultils/PlayerCard";
import Start from "../../../resources/images/test/co-giao.png";

let Cards = [
	{
		bottom: 90,
		left: 300,
		player: Vincent_Kompany,
	},
	{
		bottom: 60,
		left: 200,
		player: Raheem_Sterling,
	},
	{
		bottom: 30,
		left: 100,
		player: Otamendi,
	},
	{
		bottom: 0,
		left: 0,
		player: Vincent_Kompany,
	},
];

const HomeCards = () => {
	return (
		<>
			{/* <hr /> */}
			<div className="player_start">
				<div className="left">
					<div className="player_box">
						<div className="news_img">
							<img src={Start} style={{ width: "100%", height: "100%" }} />
						</div>
						<div className="news_info">
							{/* <div className="title">Manchester United</div> */}
							<div className="des">
								<h3 style={{ margin: "0" }}>
									MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình
									ra sao?
								</h3>
							</div>
							<div className="detail">
								<p>
									(Tin thể thao, tin người đẹp) Đam mê chạy bộ giúp cô giáo mầm
									non Thái Lan sở hữu cơ thể gần như hoàn hảo.
								</p>
							</div>
							<div className="time">
								<p>Asiad 2023 | 21/09/2023 | 00:19</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ButtonStar />
		</>
	);
	// const showAnimateCards = () =>
	// 	Cards.map((card, i) => (
	// 		//console.log(card)
	// 		<Animate
	// 			key={i}
	// 			show={true}
	// 			start={{ left: 0, bottom: 0 }}
	// 			enter={{
	// 				left: [card.left],
	// 				bottom: [card.bottom],
	// 				timing: { delay: 1000, duration: 500, easePolyOut },
	// 			}}
	// 		>
	// 			{({ left, bottom }) => (
	// 				<div style={{ position: "absolute", left, bottom }}>
	// 					<PlayerCard number="30" name="Nicolas" lastname="Otamendi" bck={card.player}/>
	// 				</div>
	// 			)}
	// 		</Animate>
	// 	));
	// return <div>{showAnimateCards()}</div>;
};
export default HomeCards;
