import Cookies from "cookies";

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);
  cookies.set("token");
  res.redirect("/login");
}
