import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const emailSubscibe = async (email: string) => {
  try {
    const response = await apiClient.post(`/api/subscribe`, {
      email,
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
