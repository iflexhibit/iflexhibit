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
    console.log(error.toJSON());
    if (error.response)
      return res.status(error.response.status).json(error.response.data);
    return res.end();
  }
}
