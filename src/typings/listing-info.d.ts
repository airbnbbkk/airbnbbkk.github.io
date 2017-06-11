type ListingInfoDict = {
  [key: string]: ListingInfo
};

type ListingInfo = {
  location: {
    voiceGuide: {
      howToGo: InfoByLang
    }
    address: InfoByLang,
  },
  checkIn: {
    video: {
      howToGo: InfoByLang
    }
  },
  rules: InfoByLang,
  wifi: {
    name: string,
    pw: string | number
  }
};
