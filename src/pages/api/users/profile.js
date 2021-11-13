import axios from "axios";

export default function handler(req, res) {
  const token = req.headers["x-auth-token"];
  const { username, contact, bio } = req.body;
  if (!token) return res.status(401).json({ msg: "Unauthorized", status: 401 });
  return new Promise((resolve, reject) => {
    axios
      .post(
        process.env.API_URL + "/api/users/profile",
        { username, contact, bio },
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "application/json",
          },
        }
      )
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
