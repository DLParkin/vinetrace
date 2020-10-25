import {
  getPercentage,
  getPercentageByYearAndVariety,
  getDataFile,
} from "../lib/api";

const wineriesRoutes = (app, fs) => {
  // Gets JSON associated with the given id
  app.get("/api/winery/:id", (req, res) => {
    const file = getDataFile(req.params.id);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

  // Gets JSON associated with the given id and returns new json with percentage by year
  app.get("/api/breakdown/year/:id", (req, res) => {
    const file = getDataFile(req.params.id);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      const parseData = JSON.parse(data);
      const percentage = getPercentage(parseData.components, "year");
      const breakDown = {
        breakDownType: "year",
        breakdown: percentage.sort((a, b) => b.percentage - a.percentage),
      };
      res.send(breakDown);
    });
  });

  // Gets JSON associated with the given id and returns new json with percentage by variety
  app.get("/api/breakdown/variety/:id", (req, res) => {
    const file = getDataFile(req.params.id);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      const parseData = JSON.parse(data);
      const percentage = getPercentage(parseData.components, "variety");
      const breakDown = {
        breakDownType: "variety",
        breakdown: percentage.sort((a, b) => b.percentage - a.percentage),
      };
      res.send(breakDown);
    });
  });

  // Gets JSON associated with the given id and returns new json with percentage by region
  app.get("/api/breakdown/region/:id", (req, res) => {
    const file = getDataFile(req.params.id);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      const parseData = JSON.parse(data);
      const percentage = getPercentage(parseData.components, "region");
      const breakDown = {
        breakDownType: "region",
        breakdown: percentage.sort((a, b) => b.percentage - a.percentage),
      };
      res.send(breakDown);
    });
  });

  // Gets JSON associated with the given id and returns new json with percentage by year/variety
  app.get("/api/breakdown/year-variety/:id", (req, res) => {
    // TODO year and variety
    const file = getDataFile(req.params.id);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      const parseData = JSON.parse(data);
      const percentage = getPercentageByYearAndVariety(
        parseData.components,
        "year",
        "variety"
      );
      const breakDown = {
        breakDownType: "year-variety",
        breakdown: percentage.sort((a, b) => b.percentage - a.percentage),
      };
      res.send(breakDown);
    });
  });
};

export default wineriesRoutes;
