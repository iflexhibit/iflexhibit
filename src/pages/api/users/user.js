import axios from "axios";

export default function handler(req, res) {
  const token = req.headers["x-auth-token"];
  if (!token) return res.status(401).json({ msg: "Unauthorized", status: 401 });
  axios
    .get(process.env.API_URL + "/api/users/user", {
      headers: { "x-auth-token": token },
    })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data);
    });
}
