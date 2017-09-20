interface PickupServiceInfo {
  vehicles: PickupVehicle[];
  spots: PickupSpot[];
}

type PickupVehicle = {
  name: InfoByLang<string>;
  capacity: string;
  price: number;
  img: string;
};

type PickupSpot = {
  type: number,
  name: InfoByLang<string>;
  location: string;
};
