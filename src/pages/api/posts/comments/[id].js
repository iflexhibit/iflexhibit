import axios from "axios";

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.API_URL + "/api/posts/comments/" + req.query.id)
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
