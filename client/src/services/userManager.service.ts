import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";
import { ROOT, USER_MANAGER } from "../constants/url.constants";
import { IAddUserManagerProp } from "../rtk/features/userManagerSlice";

export const getUserManagerService = async (): Promise<TResponse> => {
  return await api.get([ROOT, USER_MANAGER]).then(async (res: Response) => {
    const response = await res.json();
    return { ...response, status: res.status };
  });
};

export const updateUserService = async (payload: any): Promise<TResponse> => {
  return await api
    .put({ urls: [ROOT, USER_MANAGER], data: payload })
    .then(async (res) => {
      const response = await res.json();
      return { ...response, status: res.status };
    });
};

export const addUserService = async (
  payload: IAddUserManagerProp
): Promise<TResponse> => {
  return await api
    .post({ urls: [ROOT, USER_MANAGER], data: payload })
    .then(async (res) => {
      const response = await res.json();
      return { ...response, status: res.status };
    });
};
