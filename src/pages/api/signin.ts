import { User } from "@/types/Common";
import type { NextApiRequest, NextApiResponse } from "next";



const tmpUser: User= {
  email: "test@gmail.com",
  password: "1234",
  name: "Mr.Kim",
};

type Data = {
  result: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(201).json({ result: false });
    return;
  }

  if (tmpUser.email !== email || tmpUser.password !== password) {
    res.status(201).json({ result: false });
    return;
  }

  res.status(200).json({ result: true });
}
