import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BREVO_API_URL,
  headers: {
    "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY!,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export const subscripeEmail = async (email: string) => {
  try {
    const response = await apiClient.post(`https://api.brevo.com/v3/contacts`, {
      email: email,
      listIds: [2],
      updateEnabled: true,
    });

    return response.data.id;
  } catch (error) {
    console.log(error);
  }
};
