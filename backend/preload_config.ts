import { config } from "dotenv";
config({ path: `${process.cwd()}/.env.${process.env.NODE_ENV}` });