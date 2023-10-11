import { INews, ITeam } from '../models/model.js';

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
