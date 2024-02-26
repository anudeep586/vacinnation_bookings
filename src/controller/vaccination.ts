import {
  addCapicityService,
  addUserService,
  addvacinationServiceCenter,
  bookVacinnationService,
  listAllBookingsCenterService,
  listVaccinationCenterService,
} from "../service/service";

export const addUser = async (ctx: any) => {
  try {
    const { userId, name, gender, age, current_state, current_district } =
      ctx.request.body;
    const addUserRequest = {
      userId,
      name,
      gender,
      age,
      current_state,
      current_district,
    };
    const addUserResponse = await addUserService(addUserRequest);
    ctx.body = addUserResponse;
    ctx.status = 201;
  } catch (error: any) {
    (ctx.status = error.status), (ctx.body = error.data);
  }
};

export const addvaccinationCenter = async (ctx: any) => {
  try {
    const { stateName, districtName, centerId } = ctx.request.body;
    const addVacinationRequest = {
      stateName,
      districtName,
      centerId,
    };
    const addVacinationResponse = await addvacinationServiceCenter(
      addVacinationRequest
    );
    ctx.body = addVacinationResponse;
    ctx.status = 201;
  } catch (error: any) {
    (ctx.status = error.status), (ctx.body = error.data);
  }
};

export const addCapicity = async (ctx: any) => {
  try {
    const { day, capacity, centerId } = ctx.request.body;
    const addCapcityRequest = {
      day,
      capacity,
      centerId,
    };
    const addCapcityResponse = await addCapicityService(addCapcityRequest);
    ctx.body = addCapcityResponse;
    ctx.status = 201;
  } catch (error: any) {
    (ctx.status = error.status), (ctx.body = error.data);
  }
};

export const listVaccinationCenter = async (ctx: any) => {
  try {
    const districtName = ctx.request.params.districtName;
    const addCapcityResponse = await listVaccinationCenterService(districtName);
    ctx.body = addCapcityResponse;
    ctx.status = 201;
  } catch (error: any) {
    (ctx.body = error.data);
  }
};

export const listAllBookingsCenter = async (ctx: any) => {
    try {
      const districtName = ctx.request.params.districtName;
      const addCapcityResponse = await listAllBookingsCenterService(districtName);
      ctx.body = addCapcityResponse;
      ctx.status = 201;
    } catch (error: any) {
     (ctx.body = error.data);
    }
  };

export const bookVacinnation = async (ctx: any) => {
  try {
    const { centerId, day, userId } = ctx.request.body;
    const addCapcityResponse = await bookVacinnationService({centerId, day, userId});
    ctx.body = addCapcityResponse;
    ctx.status = 201;
  } catch (error: any) {
    (ctx.body = error.data);
  }
};
