import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../mock";

export default function handler(req: NextApiRequest, res: NextApiResponse<API.LoginResult>) {
  req
  switch (req.method) {
    case 'GET':
      const id = Number(req.query.id);
      if (isNaN(id)) {
        res.status(400).json({ code: 400, message: 'Invalid Id' });
        return;
      }
      const user = Users.find(user => user.id === id);
      if (user) {
        const newUser = { ...user };
        delete newUser.password;
        res.status(200).json({ code: 200, data: newUser, message: 'Success!' });
      } else {
        res.status(400).json({ code: 400, message: `Not found User with ID ${ id }!` });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ code: 405, message: `Method ${req.method} not allowed` });
  }
}