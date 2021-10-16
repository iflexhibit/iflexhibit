import Cookies from "cookies";

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);
  const token = req.query.token || null;
  cookies.set("token", token);
  res.redirect("/");
}
