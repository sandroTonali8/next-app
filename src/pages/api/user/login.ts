import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../mock";

export default function handler(req: NextApiRequest, res: NextApiResponse<API.LoginResult>) {
  req
  switch (req.method) {
    case 'POST':
      const { username, password } = JSON.parse(req.body);
      const user = Users.find(user => user.username === username && user.password === password);
      if (user) {
        const newUser = { ...user };
        delete newUser.password;
        res.status(200).json({ code: 200, data: newUser, message: 'Success!' });
      } else if (!Users.find(user => user.username === username)) {
        res.status(400).json({ code: 400, message: `No user with username ${ username }!` });
      } else {
        res.status(400).json({ code: 400, message: `Wrong password!` });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ code: 405, message: `Method ${req.method} not allowed` });
  }
}