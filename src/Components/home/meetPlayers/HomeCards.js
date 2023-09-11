import React from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

import Otamendi from "../../../resources/images/players/Otamendi.png";
import Raheem_Sterling from "../../../resources/images/players/Raheem_Sterling.png";
import Vincent_Kompany from "../../../resources/images/players/Vincent_Kompany.png";
import PlayerCard  from "../../ultils/PlayerCard"

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
	const showAnimateCards = () => (
		Cards.map((card, i) => (
			//console.log(card)
			<Animate
				key={i}
				show={true}
				start={{ left: 0, bottom: 0 }}
				enter={{
					left: [card.left],
					bottom: [card.bottom],
					timing: { duration: 500, easePolyOut },
				}}
			>
        {({left, bottom}) => (
          <div style={{position: 'absolute', left, bottom}}><PlayerCard/></div>
        )}
      </Animate>
		))
  );
	return <div>{showAnimateCards()}</div>;
};
export default HomeCards;
