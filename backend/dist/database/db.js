import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.on("error", (err) => {
            console.log(err);
        });
        console.log(`MongoDB Connection Established: ${conn.connection.host}`);
        return conn;
    }
    catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
};
export default connectDb;
//# sourceMappingURL=db.js.map