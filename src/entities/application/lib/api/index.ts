import axios from "axios";

export const sendApplicationData = async (formData: FormData) => {
  try {
    const res = await axios.post("/api/application", formData);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
