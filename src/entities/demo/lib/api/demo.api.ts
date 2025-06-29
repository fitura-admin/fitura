import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const subscripeEmail = async (email: string) => {
  try {
    const response = await apiClient.post(`/api/subscribe`, {
      email: email,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
