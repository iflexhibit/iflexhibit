import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(process.env.API_URL + "/api/users/user", {
      validateStatus: (status) => status < 400,
      withCredentials: true,
      headers:req.headers
    });
    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response)
      return res.status(error.response.status).json(error.response.data);
    return res.status(500).end();
  }
}
