export default async function handler(req, res) {
  res.redirect(process.env.API_URL + "/api/auth/google");
}
