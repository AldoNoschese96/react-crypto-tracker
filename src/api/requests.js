import { axiosClient } from "./axiosClient";

export const getAllCrypto = async () => {
  try {
    const { data } = await axiosClient.get(
      "/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d"
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
