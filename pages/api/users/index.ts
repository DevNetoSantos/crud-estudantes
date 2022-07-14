import { NextApiHandler } from "next";
import prisma from '../../../instances/prisma';


// inserting new user
const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email, city } = req.body;

  let newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      city: city
    }
  });
  res.status(201).json({user: newUser}); 
}

//Getting all users
const handlerGet: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      city: true
    }
  });
  res.status(200).json({users});
}

const handler: NextApiHandler = async (req, res) => {
  switch(req.method) {
    case 'POST':
      handlerPost(req, res);
      break;
    case 'GET':
      handlerGet(req, res);
      break;
  }
};

export default handler;