import { getDataFile } from "../lib/api";

// TODO FIX
// This is bad but reads files and merges them so we can get them
// in one request to use in react
const searchRoutes = (app, fs) => {
  app.get("/api/search/getAllFiles", async (req, res) => {
    let file1;
    let file2;
    let file3;

    await fs.readFile(getDataFile("11YVCHAR001"), "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      file1 = JSON.parse(data);
    });
    await fs.readFile(getDataFile("11YVCHAR002"), "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      file2 = JSON.parse(data);
    });
    await fs.readFile(getDataFile("15MPPN002-VK"), "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      file3 = JSON.parse(data);
      let files = [file1, file2, file3];
      res.send(files);
    });
  });
};

export default searchRoutes;
