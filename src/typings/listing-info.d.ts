type Dict<T> = {
  [key: string]: T;
};

type HouseRule = {
  title: string;
  icon: string;
  rule: string;
};

type ListingInfo = {
  name: string,
  id: number,
  order: number,
  location: ListingInfoLocation;
  checkIn: ListingInfoCheckIn;
  facilities: ListingInfoFacilities;
};

type ListingInfoLocation = {
  voiceGuide: {
    howToGo: InfoByLang<string>;
  }
  houseInfo: {
    building: string;
    floor: number;
    houseNumber: string;
  };
  address: InfoByLang<string>;
  gMap: any;
};

type ListingInfoCheckIn = {
  video: {
    howToGo: InfoByLang<string>;
  };
  time: {
    in: number;
    out: number;
    flexIn: number;
    flexOut: number;
    paidIn: number;
    paidOut: number;
    overStayCharge: number;
  };
  leaveKeycard: string;
};

type ListingInfoFacilities = {
  wifi: {
    name: string;
    pw: string | number;
  }
  dumpster: {
    location: InfoByLang<string>;
  },
  poolAndGym: {
    hours: {
      open: number;
      close: number;
    }
    location: InfoByLang<string>;
  }
};
