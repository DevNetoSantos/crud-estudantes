import { NextApiHandler } from "next";
import api from "../../../services/api";


// inserting new user
const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email, city } = req.body;

  const newUser = await api.addUser(name, email, city)
  .catch((error) => {
    res.json({error: 'Usuário ja existe.'})
  });
  
  if(newUser) {
    res.status(201).json({user: newUser});
  }
}

//Getting all users
const handlerGet: NextApiHandler = async (req, res) => {
  const { page } = req.query;
  const users = await api.getAllUsers(parseInt(page as string));
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