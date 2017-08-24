const GMaps = {
  BELLE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.311621847027!2d100.5672353155985!3d13.76007190080715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8b89948df9%3A0xb209ddbd1f7910d0!2sBelle+Condominium!5e0!3m2!1sen!2sth!4v1503540415771',
  ASPIRE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.311621847027!2d100.5672353155985!3d13.76007190080715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef33442611f%3A0x9d1ddb4e4964bfcb!2sAspire+Rama+9+Condominium!5e0!3m2!1sen!2sth!4v1503540840914'
};

export const ListingInfoDict: Dict<ListingInfo> = {
  nj_1: {
    location: {
      voiceGuide: {
        howToGo: {
          default: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0'
        }
      },
      address: {
        en: '131/414, 22nd fl, Building C2, Belle Condo, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '131/414, Building C2, 33/4 พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.BELLE
    },
    checkIn: {
      video: {
        howToGo: {
          default: 'https://www.youtube.com/embed/fTprVHLXtZw?cc_load_policy=1'
        }
      },
      houseInfo: {
        building: 'C2',
        floor: 25,
        houseNumber: '131/414'
      },
      time: {
        in: 14,
        out: 12,
        flexIn: 5,
        flexOut: 6,
        paidIn: 5,
        paidOut: 5,
        overStayCharge: 1000
      },
      leaveKeycard: 'LEAVE_KEY_CARD_ON_THE_TABLE'
    },
    facilities: {
      wifi: {
        name: 'nui',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Near the emergency exit in front of the elevator',
          ko: '엘리베이터 앞 비상 계단실',
          cn: '靠近电梯前的紧急出口'
        }
      },
      poolAndGym: {
        hours: {
          open: 7,
          close: 21
        },
        location: {
          en: '\'P\' floor in the same building',
          ko: '숙소 건물 내 \'P\' 층',
          cn: '\'P\' 楼在同一栋楼'
        }
      }
    }
  },
  nj_2: {
    location: {
      voiceGuide: {
        howToGo: {
          default: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0'
        }
      },
      address: {
        en: '141/740, 25th fl., Building B1, Belle Condo, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '141/740, Building B1, Belle Condo, พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMAp: GMaps.BELLE
    },
    checkIn: {
      video: {
        howToGo: {
          default: 'https://www.youtube.com/embed/6tCii41nYxA?cc_load_policy=1'
        }
      },
      houseInfo: {
        building: 'B1',
        floor: 25,
        houseNumber: '141/740'
      },
      time: {
        in: 14,
        out: 12,
        flexIn: 5,
        flexOut: 6,
        paidIn: 5,
        paidOut: 5,
        overStayCharge: 1000
      },
      leaveKeycard: 'LEAVE_KEY_CARD_ON_THE_TABLE'
    },
    facilities: {
      wifi: {
        name: 'nui2',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Near the emergency exit in front of the elevator',
          ko: '엘리베이터 앞 비상 계단실',
          cn: '靠近电梯前的紧急出口'
        }
      },
      poolAndGym: {
        hours: {
          open: 7,
          close: 21
        },
        location: {
          en: '\'P\' floor in the same building',
          ko: '숙소 건물 내 \'P\' 층',
          cn: '\'P\' 楼在同一栋楼'
        }
      }
    }
  },
  nj_3: {
    location: {
      voiceGuide: {
        howToGo: {
          default: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0'
        }
      },
      address: {
        en: '141/260, 34th Fl., Building A1, Belle Condo, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '141/260, Building A1, พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMAp: GMaps.BELLE
    },
    checkIn: {
      video: {
        howToGo: {
          default: 'https://www.youtube.com/embed/HHdMmglPL2w?cc_load_policy=1'
        }
      },
      houseInfo: {
        building: 'A1',
        floor: 34,
        houseNumber: '141/260'
      },
      time: {
        in: 14,
        out: 12,
        flexIn: 5,
        flexOut: 6,
        paidIn: 5,
        paidOut: 5,
        overStayCharge: 1000
      },
      leaveKeycard: 'LEAVE_KEY_CARD_ON_THE_TABLE'
    },
    facilities: {
      wifi: {
        name: 'nui3',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Near the emergency exit in front of the elevator',
          ko: '엘리베이터 앞 비상 계단실',
          cn: '靠近电梯前的紧急出口'
        }
      },
      poolAndGym: {
        hours: {
          open: 7,
          close: 21
        },
        location: {
          en: '\'P\' floor in the same building',
          ko: '숙소 건물 내 \'P\' 층',
          cn: '\'P\' 楼在同一栋楼'
        }
      }
    }
  },
  nj_4: {
    location: {
      voiceGuide: {
        howToGo: {
          default: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0'
        }
      },
      address: {
        en: '842/479, 15th Fl., Building B, Aspire Condo, Soi 2, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '842/479, Building B,  แอสปาย คอนโด พระราม 9 ซอย 2 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMAp: GMaps.ASPIRE
    },
    checkIn: {
      video: {
        howToGo: {
          default: 'https://www.youtube.com/embed/kbh0r9qtpmE?cc_load_policy=1'
        }
      },
      houseInfo: {
        building: 'B',
        floor: 15,
        houseNumber: '842/479'
      },
      time: {
        in: 14,
        out: 12,
        flexIn: 5,
        flexOut: 6,
        paidIn: 5,
        paidOut: 5,
        overStayCharge: 1000
      },
      leaveKeycard: 'LEAVE_KEY_CARD_IN_THE_MAIL_BOX'
    },
    facilities: {
      wifi: {
        name: 'nui4',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Near the emergency exit in front of the elevator',
          ko: '엘리베이터 앞 비상 계단실',
          cn: '靠近电梯前的紧急出口'
        }
      },
      poolAndGym: {
        hours: {
          open: 7,
          close: 21
        },
        location: {
          en: 'right in front of the house building',
          ko: '숙소 빌딩 밖 맞은 편',
          cn: '就在房屋前面'
        }
      }
    }
  }
};

