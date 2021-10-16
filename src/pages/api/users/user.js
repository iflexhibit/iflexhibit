import fetch from "isomorphic-fetch";

export default async function handler(req, res) {
  const response = await fetch(process.env.API_URL + "/api/users/user", {
    headers: {
      cookie: req.headers.cookie,
    },
  });
  const data = await response.json();
  return res.status(response.status).json(data);
}
