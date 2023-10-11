import dotenv from "dotenv";
dotenv.config({
    path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});
console.log(process.cwd());
import colors from "colors";
import connectDb from "./db.js";
import { Teams, Position, Matches } from "./seeds/dataSeed.js";
import { MatchModel, PositionModel, TeamModel } from "./models/model.js";
const truncate = async () => {
    try {
        await connectDb();
        console.log(colors.bgGreen("PREPARE TO TRUNCATE DATA!"));
        await TeamModel.deleteMany();
        await PositionModel.deleteMany();
        console.log(colors.bgGreen("TRUNCATE MONGDB SUCCESS!"));
    }
    catch (e) {
        console.log(e);
        console.log(colors.bgRed("TRUNCATE MONGDB FAILED!"));
        process.exit(1);
    }
};
const importSeed = async () => {
    try {
        console.log(colors.bgGreen("PREPARE TO SEED DATA!"));
        await truncate();
        await TeamModel.insertMany(Teams);
        const positionListRaw = await Promise.all(Position.map(async (p) => {
            const team = await TeamModel.findOne({ shortName: p.team });
            p.team = team?._id.toString();
            return p;
        }));
        await PositionModel.insertMany(positionListRaw);
        const matchesRaw = await Promise.all(Matches.map(async (m) => {
            const local = await TeamModel.findOne({ shortName: m.local });
            const away = await TeamModel.findOne({ shortName: m.away });
            return { ...m, local: local?._id, away: away?._id };
        }));
        await MatchModel.insertMany(matchesRaw);
        console.log(colors.bgGreen("SEED MONGDB SUCCESS!"));
        process.exit(0);
    }
    catch (e) {
        console.log(e);
        console.log(colors.bgRed("SEED MONGDB FAILED!"));
        process.exit(1);
    }
};
if (process.argv[2] === "-d" || process.argv[2] === "-D") {
    truncate();
}
else {
    importSeed();
}
//# sourceMappingURL=seeder.js.map