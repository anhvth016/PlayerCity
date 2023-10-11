import dotenv from "dotenv";
dotenv.config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

console.log(process.cwd());

import colors from "colors";

import connectDb from "./db.js";
import {Teams} from "./seeds/dataSeed.js";

import {TeamModel} from "./models/model.js";

const truncate = async () => {
  try {
    await connectDb();
    console.log(colors.bgGreen("PREPARE TO TRUNCATE DATA!"));
    await TeamModel.deleteMany();
    console.log(colors.bgGreen("TRUNCATE MONGDB SUCCESS!"));
  } catch (e) {
    console.log(e);
    console.log(colors.bgRed("TRUNCATE MONGDB FAILED!"));
    process.exit(1);
  }
};

const importSeed = async () => {
  try {
    console.log(colors.bgGreen("PREPARE TO SEED DATA!"));
    await truncate();
    const teamList = await TeamModel.insertMany(Teams);
    // const userPopulatedProducts = productsDataSeed.map((seed) => {
    //   return { ...seed, user: userList[0]._id };
    // });
    // const productList = await Product.insertMany([...userPopulatedProducts, ...userPopulatedProducts]);
    console.log(colors.bgGreen("SEED MONGDB SUCCESS!"));
    process.exit(0);
  } catch (e) {
    console.log(e);
    console.log(colors.bgRed("SEED MONGDB FAILED!"));
    process.exit(1);
  }
};

if (process.argv[2] === "-d" || process.argv[2] === "-D") {
  truncate();
} else {
  importSeed();
}
