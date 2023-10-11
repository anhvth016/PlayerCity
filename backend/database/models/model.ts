import { Message, MessagePayload } from '../../src/types/chatType.js';
import mongoose, { Document, mongo } from 'mongoose';

export interface INews {
    _id?: string;
    publishedDate?: number;
    footballTournament?: string | null; // Dùng để phân loại bài báo
    title?: string | null;
    description?: string | null;
    thumbnail?: string | null;
    detail: INewsDetail;
}

export interface INewsDetail {
    _id?: string;
    content?: string | null;
    author?: string | null;
}

export interface ITeam {
    _id?: string;
    name: string;
    shortName: string;
    thumbnail: string;
}

export interface IPosition {
    matches: number;
    win: number;
    draw: number;
    lose: number;
    totalScore: number;
    team: string | ITeam;
}

export interface IMatch {
    away: string | ITeam;
    local: string | ITeam;
    date?: string;
    referee?: string;
    stadium?: string;
    resultAway?: number;
    resultLocal?: number;
    result: string; // Result với vai trò của đội chủ nhà.
    final: boolean;
}

const PositionSchema = new mongoose.Schema({
    matches: {
        type: Number,
        require: true
    },
    win: {
        type: Number,
        require: true
    },
    draw: {
        type: Number,
        require: true
    },
    lose: {
        type: Number,
        require: true
    },
    totalScore: {
        type: Number,
        require: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    }
});


const MatchSchema = new mongoose.Schema({
    away: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    },
    local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    },
    date: {
        type: String,
        require: true
    },
    referee: {
        type: String,
        require: false
    },
    stadium: {
        type: String,
        require: false
    },
    resultAway: {
        type: Number,
        require: false
    },
    resultLocal: {
        type: Number,
        require: false
    },
    result: {
        type: String,
        require: false
    },
    final: {
        type: Boolean,
        require: false
    },
});

const TeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        shortName: {
            type: String,
            require: true
        },
        thumbnail: {
            type: String,
            require: false
        }
    },
    { timestamps: true }
);

const NewsSchema = new mongoose.Schema(
    {
        published_date: {
            type: Number,
            require: true
        },
        football_tournament: {
            type: String,
            require: false
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: false
        },
        thumbnail: {
            type: String,
            require: false
        },
        detail: {
            content: {
                type: String,
                require: true
            },
            author: {
                type: String,
                require: false
            }
        },
        isDelete: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export const NewsModel = mongoose.model('News', NewsSchema);
export const TeamModel = mongoose.model('Team', TeamSchema);
export const PositionModel = mongoose.model('Position', PositionSchema);
export const MatchModel = mongoose.model('Match', MatchSchema);
