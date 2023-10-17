import mongoose from 'mongoose';
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
const TeamSchema = new mongoose.Schema({
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
}, { timestamps: true });
const NewsSchema = new mongoose.Schema({
    publishedDate: {
        type: String,
        require: true
    },
    footballTournament: {
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
}, { timestamps: true });
export const NewsModel = mongoose.model('News', NewsSchema);
export const TeamModel = mongoose.model('Team', TeamSchema);
export const PositionModel = mongoose.model('Position', PositionSchema);
export const MatchModel = mongoose.model('Match', MatchSchema);
//# sourceMappingURL=model.js.map