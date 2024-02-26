export interface User {
  userId: string;
  name: string;
  gender: string;
  age: number;
  current_state: string;
  current_district: string;
}

export interface vaccinationCenter {
  stateName: string;
  districtName: string;
  centerId: string;
}

export interface Capicity {
  capacity: string;
  day: number;
  centerId: string;
}


export interface Bookings {
  centerId: string;
  day: number;
  userId: string;
}