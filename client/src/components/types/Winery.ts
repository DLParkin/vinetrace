export type Winery = {
  lotCode: string;
  volume: number;
  description: string;
  tankCode: string;
  productState: string;
  ownerName: string;
  components: [
    {
      percentage: number;
      year: number;
      variety: string;
      region: string;
    }
  ];
};

export type WineryDetails = {
  breakDownType: string;
  breakdown: [
    {
      percentage: number;
      key: string;
    }
  ];
};
