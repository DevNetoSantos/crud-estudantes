import { NextApiHandler } from "next";
import api from "../../../services/api";

const handlerGet: NextApiHandler = async (req, res) => {
  let { id } = req.query;

  const user = await api.getOneUser(parseInt(id as string));
  if(user) {
    res.json({user});
  } else {
    res.json({error: 'Usuário não encontrado.'});
  }
}

const handlerPut: NextApiHandler =  async (req, res) => {
  const { name, city, email } = req.body;
  const { id } = req.query;
  
  const updateUser = await api.getPutUser(name, city, email, parseInt(id as string));

  if(updateUser) {
    res.json({updateUser});
  } else {
    res.json({error: 'Não foi possível alterar dados.'});
  }
}

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  await api.deleteUser(parseInt(id as string))
 .catch((error) => {
    res.json({error: 'Usuário não encontrado.'})
  })
   res.json({delete: true});
  }

const handler: NextApiHandler = async (req, res) => {
  switch(req.method) {
    case 'GET':
      handlerGet(req, res);
      break;
    case 'PUT':
      handlerPut(req, res);
      break;
    case 'DELETE':
      handlerDelete(req, res);
      break;
  }
};

export default handler;