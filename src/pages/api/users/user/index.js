import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(process.env.API_URL + "/api/users/user", {
      headers: req.headers,
      withCredentials: true,
      validateStatus: (status) => status <= 400,
    });
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.end();
  }
}
