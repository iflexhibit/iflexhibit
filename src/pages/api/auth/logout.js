export default async function handler(req, res) {
  res
    .writeHead(302, { Location: process.env.API_URL + "/api/auth/logout" })
    .end();
}
