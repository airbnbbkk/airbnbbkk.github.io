const GMaps = {
  BELLE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.311621847027!2d100.5672353155985!3d13.76007190080715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8b89948df9%3A0xb209ddbd1f7910d0!2sBelle+Condominium!5e0!3m2!1sen!2sth!4v1503540415771',
  ASPIRE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.311621847027!2d100.5672353155985!3d13.76007190080715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef33442611f%3A0x9d1ddb4e4964bfcb!2sAspire+Rama+9+Condominium!5e0!3m2!1sen!2sth!4v1503540840914',
  RHYTHM_ASOKE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.407754978238!2d100.56226151560517!3d13.754266700940178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x631db0e6f616e2fc!2sRHYTHM+Asoke!5e0!3m2!1sen!2sth!4v1514630935170'
};

export const ListingInfoDict: Dict<ListingInfo> = {
  nj_1: {
    name: 'NJ1',
    id: 16268602,
    order: 1,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          ko: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          cn: 'https://player.youku.com/embed/XMjg0OTQzNzU5Mg=='
        }
      },
      houseInfo: {
        building: 'C2',
        floor: 22,
        houseNumber: '131/414'
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
          en: 'https://www.youtube.com/embed/fTprVHLXtZw?rel=0&cc_load_policy=1&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/fTprVHLXtZw?rel=0&cc_load_policy=1&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMjg4MDgzODQyMA=='
        }
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
          en: 'Behind the door to the emergency exit in front of the elevator',
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
    name: 'NJ2',
    id: 16874939,
    order: 2,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          ko: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          cn: 'https://player.youku.com/embed/XMjg0OTQzNzU5Mg=='
        }
      },
      houseInfo: {
        building: 'B1',
        floor: 25,
        houseNumber: '141/740'
      },
      address: {
        en: '141/740, 25th fl., Building B1, Belle Condo, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '141/740, Building B1, Belle Condo, พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.BELLE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/6tCii41nYxA?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/6tCii41nYxA?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzE0MDE1NTU2MA=='
        }
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
          en: 'Behind the door to the emergency exit in front of the elevator',
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
    name: 'NJ3',
    id: 17972084,
    order: 3,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          ko: 'https://www.youtube.com/embed/68W2Y_daPfI?rel=0',
          cn: 'https://player.youku.com/embed/XMjg0OTQzNzU5Mg=='
        }
      },
      houseInfo: {
        building: 'A1',
        floor: 34,
        houseNumber: '141/260'
      },
      address: {
        en: '141/260, 34th Fl., Building A1, Belle Condo, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '141/260, Building A1, พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.BELLE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/HHdMmglPL2w?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/HHdMmglPL2w?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMjg0OTA0Njc2MA=='
        }
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
          en: 'Behind the door to the emergency exit in front of the elevator',
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
    name: 'NJ4',
    id: 18722790,
    order: 4,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          ko: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          cn: 'https://player.youku.com/embed/XMzAwNzc1MTkxNg=='
        }
      },
      houseInfo: {
        building: 'B',
        floor: 15,
        houseNumber: '842/479'
      },
      address: {
        en: '842/479, 15th Fl., Building B, Aspire Condo, Soi 2, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '842/479, Building B,  แอสปาย คอนโด พระราม 9 ซอย 2 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.ASPIRE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/3hMUhX7tpGo?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/3hMUhX7tpGo?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzAwNTY1MTEyMA=='
        }
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
          en: 'Behind the door to the emergency exit in front of the elevator',
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
  },
  nj_5: {
    name: 'NJ5',
    id: 19097139,
    order: 5,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          ko: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          cn: 'https://player.youku.com/embed/XMzAwNzc1MTkxNg=='
        }
      },
      houseInfo: {
        building: 'B',
        floor: 11,
        houseNumber: '842/425'
      },
      address: {
        en: '842/425, 11th Fl., Building B, Aspire Condo, Soi 2, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '842/425, Building B,  แอสปาย คอนโด พระราม 9 ซอย 2 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.ASPIRE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/kcARJqpccro?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/kcARJqpccro?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzAxODc3NDY0OA=='
        }
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
        name: 'nui',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Behind the door to emergency exit in front of the elevator',
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
  },
  nj_6: {
    name: 'NJ6',
    id: 20777226,
    order: 6,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          ko: 'https://www.youtube.com/embed/4Ee6iIGCxR8?rel=0',
          cn: 'https://player.youku.com/embed/XMzAwNzc1MTkxNg=='
        }
      },
      houseInfo: {
        building: 'B',
        floor: 22,
        houseNumber: '842/614'
      },
      address: {
        en: '842/614, 22nd Fl., Building B, Aspire Condo, Soi 2, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '842/614, Building B,  แอสปาย คอนโด พระราม 9 ซอย 2 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.ASPIRE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/VwPTbsruZHg?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/VwPTbsruZHg?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzAxODc2MjIzMg=='
        }
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
        name: 'M&M Residence',
        pw: 1234567890
      },
      dumpster: {
        location: {
          en: 'Behind the door to the emergency exit in front of the elevator',
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
  },
  nj_7: {
    name: 'NJ7',
    id: 21170179,
    order: 7,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/E70Hg9PCg_Y?rel=0',
          ko: 'https://www.youtube.com/embed/E70Hg9PCg_Y?rel=0',
          cn: 'https://player.youku.com/embed/XMzAwNzc1MTkxNg=='
        }
      },
      houseInfo: {
        building: 'A',
        floor: 12,
        houseNumber: '842/189'
      },
      address: {
        en: '842/189, 12th Fl., Building A, Aspire Condo, Soi 2, Param 9, Hua Kwang, Bangkok 10310, Thailand.',
        th: '842/189, Building A,  แอสปาย คอนโด พระราม 9 ซอย 2 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310'
      },
      gMap: GMaps.ASPIRE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/E70Hg9PCg_Y?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/E70Hg9PCg_Y?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzI3NzM1MTY2OA=='
        }
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
        name: 'NUI7',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Behind the door to the emergency exit in front of the elevator',
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
  },
  nj_8: {
    name: 'NJ8',
    id: 22471822,
    order: 8,
    location: {
      voiceGuide: {
        howToGo: {
          en: 'https://www.youtube.com/embed/UbltQydj1bk?rel=0',
          ko: 'https://www.youtube.com/embed/UbltQydj1bk?rel=0',
          cn: 'https://player.youku.com/embed/XMzI3NzUyMDE3Ng=='
        }
      },
      houseInfo: {
        building: '1',
        floor: 28,
        houseNumber: '299/279'
      },
      address: {
        en: '299/279, 28th Fl., Rhythm Asoke 1, Asok-Din Daeng Rd, Khwaeng Makkasan, Khet Ratchathewi, Bangkok 10400',
        th: '299/279, 28th Fl., คอนโดริทึ่มอโศก1 ถนนอโศก-ดินแดง แขวงมักกะสัน เขตราชเทวี กรุงเทพมหานคร 10400'
      },
      gMap: GMaps.RHYTHM_ASOKE
    },
    checkIn: {
      video: {
        howToGo: {
          en: 'https://www.youtube.com/embed/Js2BFprZmDg?rel=0&cc_load_policy=1&&cc_lang_pref=en',
          ko: 'https://www.youtube.com/embed/Js2BFprZmDg?rel=0&cc_load_policy=1&&cc_lang_pref=ko',
          cn: 'https://player.youku.com/embed/XMzI3NzM1MTY2OA=='
        }
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
        name: 'NUI8',
        pw: 1234512345
      },
      dumpster: {
        location: {
          en: 'Behind the elevator, a room plated with \"Garbage\"',
          ko: '엘리베이터 뒤쪽 \"Garbage\"라고 적혀있는 곳',
          cn: '在电梯后面，有一个房间铺上了\"垃圾\"'
        }
      },
      poolAndGym: {
        hours: {
          open: 7,
          close: 21
        },
        location: {
          en: 'Pool is on the 7th floor and the gym is on the 8th floor.',
          ko: '수영장은 7층, 헬스장은 8층에 위치',
          cn: '游泳池位于7楼，健身房位于8楼。'
        }
      }
    }
  }
};
