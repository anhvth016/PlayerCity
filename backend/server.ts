import "./preload_config.js"; // To fix undefined variable in case dotenv could not load in time.
import app from "./app.js";
import connectDb from "./database/db.js";


connectDb().then(async () => {
  const server = app.listen(app.get("port"), () => {
      console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
      );
      console.log("  Press CTRL-C to stop\n");
    });
});

