import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(process.env.API_URL + "/api/users/user", {
      headers: req.headers,
      withCredentials: true,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
