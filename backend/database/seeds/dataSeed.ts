import { IMatch, INews, IPosition, ITeam } from '../models/model.js';

export const Teams: ITeam[] = [
    {
        name: 'Manchester United',
        shortName: 'MU',
        thumbnail: ''
    },
    {
        name: 'Manchester City',
        shortName: 'MC',
        thumbnail: ''
    },
    {
        name: 'Chelsea',
        shortName: 'Chel',
        thumbnail: ''
    },
    {
        name: 'Liverpool',
        shortName: 'Liv',
        thumbnail: ''
    }
];

export const Position: IPosition[] = [
    {
        matches: 20,
        draw: 8,
        lose: 2,
        win: 10,
        totalScore: 50,
        team: 'MU'
    },
    {
        matches: 30,
        draw: 8,
        lose: 11,
        win: 11,
        totalScore: 31,
        team: 'Liv'
    },
    {
        matches: 28,
        draw: 18,
        lose: 19,
        win: 11,
        totalScore: 33,
        team: 'Chel'
    },
    {
        matches: 20,
        draw: 8,
        lose: 2,
        win: 10,
        totalScore: 52,
        team: 'MC'
    },
];

// stadium?: string;
// resultAway?: number;
// resultLocal?: number;
// result: string; // Result với vai trò của đội chủ nhà.
// final: boolean;

export const Matches: IMatch[] = [
  {
      away: "MC",
      local: "MU",
			date: "2018-05-22",
			final: false,
			referee: "Marcus Red",
			result: "L",
			resultAway: 3,
			resultLocal: 2,
			stadium: "Senheiser Arena",
  },
  {
      away: "MU",
      local: "MC",
			date: "2018-03-22",
			final: false,
			referee: "Marcus",
			result: "W",
			resultAway: 1,
			resultLocal: 3,
			stadium: "Senheiser Arena",
  },
  {
      away: "Chel",
      local: "Liv",
			date: "2018-05-30",
			final: false,
			result: "L",
			resultAway: 3,
			resultLocal: 2,
			stadium: "Senheiser Arena",
			referee: "Marcus Red",
  },
  {
      away: "Chel",
      local: "MU",
			date: "2019-05-22",
			final: false,
			referee: "Marcus Red",
			result: "L",
			resultAway: 4,
			resultLocal: 2,
			stadium: "Senheiser Arena",
  },
  {
      away: "Chel",
      local: "MC",
			date: "2018-05-22",
			final: false,
			referee: "Marcus Red",
			result: "L",
			resultAway: 3,
			resultLocal: 2,
			stadium: "Senheiser Arena",
  },
  {
      away: "Liv",
      local: "Chel",
			date: "2018-05-22",
			final: false,
			referee: "Marcus Red",
			result: "D",
			resultAway: 0,
			resultLocal: 0,
			stadium: "Senheiser Arena",
  },
  {
      away: "Liv",
      local: "MC",
			date: "2018-06-22",
			final: false,
			referee: "Marcus Red",
			result: "L",
			resultAway: 3,
			resultLocal: 2,
			stadium: "Senheiser Arena",
  },
  {
      away: "Liv",
      local: "MU",
			date: "2018-07-22",
			final: false,
			referee: "Marcus Red",
			result: "W",
			resultAway: 1,
			resultLocal: 2,
			stadium: "Senheiser Arena",
  },
]

export const News: INews[] = [
    {
        publishedDate: Date.now(), // millsecond
        footballTournament: 'Ngoại hạng Anh',
        title: 'Manchester United',
        description: 'MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?',
        thumbnail: '/logo512.png',
        detail: {
            content: 'MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?',
            author: 'Micheal'
        }
    }
];
