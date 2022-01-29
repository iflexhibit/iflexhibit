import axios from "axios";

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/offenses/" + req.query.type)
      .then((response) => {
        res.status(response.status).json(response.data);
        return resolve();
      })
      .catch((error) => {
        res.status(error.response.status).json(error.response.data);
        return resolve();
      });
  });
}
