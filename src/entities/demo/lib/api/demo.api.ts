import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const subscripeEmail = async (email: string) => {
  try {
    const response = await apiClient.post(`/api/subscribe-brevo`, {
      email,
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
