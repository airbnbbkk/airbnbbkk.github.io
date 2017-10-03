export enum PICKUP_SPOTS {
  SUVARNABHUMI,
  DONMUEANG,
  HOUSE
}

export const ServicesPickupInfo: PickupServiceInfo = {
  vehicles: [
    /*{
      name: {
        en: 'Honda Accord',
        ko: '혼다 어코드',
        cn: '本田雅阁'
      },
      capacity: '2 - 3',
      price: 1000,
      img: 'honda_accord.jpg'
    },*/
    {
      name: {
        en: 'Toyota Fortuner',
        ko: '도요타 포츄너',
        cn: '丰田Fortuner'
      },
      capacity: '1 - 4',
      price: 1200,
      img: 'toyota_fortuner.jpg'
    },
    {
      name: {
        en: 'Mini Van',
        ko: '미니벤',
        cn: '迷你范'
      },
      capacity: '4 - 8',
      price: 2000,
      img: 'mini_van.jpg'
    }
  ],
  spots: [
    {
      type: PICKUP_SPOTS.SUVARNABHUMI,
      name: {
        i18n: 'SERVICES.SHUTTLE_SUVARNABHUMI'
      },
      location: 'Between gate number 3 and 4'
    },
    {
      type: PICKUP_SPOTS.DONMUEANG,
      name: {
        i18n: 'SERVICES.SHUTTLE_DONMUEANG'
      },
      location: 'Gate number 3'
    },
    {
      type: PICKUP_SPOTS.HOUSE,
      name: {
        i18n: 'SERVICES.SHUTTLE_HOUSE'
      },
      location: 'At the house lobby'
    }
  ]
};
