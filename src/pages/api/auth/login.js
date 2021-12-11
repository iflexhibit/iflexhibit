export default async function handler(req, res) {
  res.redirect(process.env.NEXT_PUBLIC_API_URL + "/api/auth/google");
}
