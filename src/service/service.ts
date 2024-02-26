import { Bookings, Capicity, User, vaccinationCenter } from "../model/model";

export const userData: any = {
  "8a41a8cf-84b6-49e7-b825-0d47398710b6": {
    name: "Foster",
    age: 34,
    current_district: "Bangalore",
    current_state: "Karnataka",
    gender: "Male",
  },
};

export const vaccinationDate: any = {
  vc1: {
    districtName: "Bangalore",
    stateName: "Karnataka",
  },
};

export const capacityData: any = [];

export const bookings: any = {};
export const addUserService = async (addUserRequest: User) => {
  if (addUserRequest.age < 18) {
    throw Error("not eligible");
  }
  if (userData[addUserRequest.userId]) {
    throw Error("record already existed");
  }
  userData[addUserRequest.userId] = {
    name: addUserRequest.name,
    age: addUserRequest.age,
    current_district: addUserRequest.current_district,
    current_state: addUserRequest.current_state,
    gender: addUserRequest.gender,
  };
  return "record stored successfully";
};

export const addvacinationServiceCenter = async (
  addVacinationRequest: vaccinationCenter
) => {
  if (vaccinationDate[addVacinationRequest.centerId]) {
    throw Error("record already existed");
  }
  vaccinationDate[addVacinationRequest.centerId] = {
    districtName: addVacinationRequest.districtName,
    stateName: addVacinationRequest.stateName,
  };
  return "record stored successfully";
};

export const addCapicityService = async (addCapicityRequest: Capicity) => {
  if (!vaccinationDate[addCapicityRequest.centerId]) {
    throw Error("record not existed");
  }
  capacityData[addCapicityRequest.centerId] = [];
  capacityData[addCapicityRequest.centerId].push({
    day: addCapicityRequest.day,
    capacity: addCapicityRequest.capacity,
  });
  return "record stored successfully";
};

export const listVaccinationCenterService = async (districtName: string) => {
  let arr: any[] = [];
  for (const dis in vaccinationDate) {
    if (vaccinationDate[dis]["districtName"] === districtName) {
      arr.push({ centerId: dis, ...vaccinationDate[dis] });
    }
  }
  return arr;
};

export const listAllBookingsCenterService = async (districtName: string) => {
  let arr: any[] = [];
  for (const dis in bookings) {
    if (
      vaccinationDate[bookings[dis]["centerId"]]["districtName"] ===
      districtName
    ) {
      arr.push({ userId: dis, ...bookings[dis] });
    }
  }
  return arr;
};

export const bookVacinnationService = async (bookingRequest: Bookings) => {
  if (!userData[bookingRequest.userId]) {
    throw new Error("user not present");
  }
  if (!vaccinationDate[bookingRequest.centerId]) {
    throw Error("throw error centerId doesn't exists");
  }
  if (capacityData[bookingRequest.centerId]) {
    const data = capacityData[bookingRequest.centerId].filter(
      (obj: any) => obj.day === bookingRequest.day
    );
    if (data) {
      if (!bookings[bookingRequest.userId]) {
        bookings[bookingRequest.userId] = {
          centerId: bookingRequest.centerId,
          day: bookingRequest.day,
        };
      }
      return "booking succeded";
    } else {
      throw new Error("day doesnot exists");
    }
  }
};
