type Dict<T> = {
  [key: string]: T;
};

type HouseRule = {
  title: string;
  icon: string;
  rule: string;
};

type ListingInfo = {
  location: ListingInfoLocation;
  checkIn: ListingInfoCheckIn;
  facilities: ListingInfoFacilities;

};

type ListingInfoLocation = {
  voiceGuide: {
    howToGo: InfoByLang<string>;
  }
  address: InfoByLang<string>;
};

type ListingInfoCheckIn = {
  video: {
    howToGo: InfoByLang<string>;
  };
  houseInfo: {
    building: string;
    floor: number;
    houseNumber: string;
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
