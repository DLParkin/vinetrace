import searchRoutes from "./search";
import wineriesRoutes from "./wineries";

const appRouter = (app, fs) => {
  // TODO test on default route
  app.get("/", (req, res) => {
    res.send("Hello api");
  });

  // adds routes from other files so we do not have them all in the same file
  wineriesRoutes(app, fs);
  searchRoutes(app, fs);
};

export default appRouter;
