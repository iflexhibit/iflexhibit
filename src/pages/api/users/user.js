import axios from "axios";

export default function handler(req, res) {
  const token = req.headers["x-auth-token"];
  if (!token) return res.status(401).json({ msg: "Unauthorized", status: 401 });
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/users/user", {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        res.status(response.status).json(response.data);
        resolve();
      })
      .catch((error) => {
        res.status(error.response.status).json(error.response.data);
        resolve();
      });
  });
}
