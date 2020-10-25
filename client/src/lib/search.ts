import { Winery } from "../components/types/Winery";

const filter = (data: Winery[], search: string) => {
  // Basic filter takes in object and looks for matching desctiption and lotcode
  let filteredResults = data.filter((d) => {
    if (
      (d &&
        d.description &&
        d.description.toLowerCase().includes(search.toLowerCase())) ||
      (d && d.lotCode && d.lotCode.toLowerCase().includes(search.toLowerCase()))
    ) {
      return d;
    }
    return "";
  });
  return filteredResults;
};

export { filter };
