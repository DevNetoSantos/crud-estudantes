import { NextApiHandler } from "next";
import prisma from '../../../instances/prisma';

const handlerGet: NextApiHandler = async (req, res) => {
  let { id } = req.query;
  let user = await prisma.user.findUnique({
    where: {
      id: parseInt(id as string)
    }
  });
  if(user) {
    res.json({user});
  } else {
    res.json({error: 'Usuário não encontrado.'});
  }
}

const handlerPut: NextApiHandler =  async (req, res) => {
  const { name, city } = req.body;
  const { id } = req.query;
  
  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(id as string)
    },
    data: {
      name: name,
      city: city
    }
  });
  if(updateUser) {
    res.json({updateUser});
  } else {
    res.json({error: 'Não foi possível alterar dados.'});
  }
}

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  await prisma.user.delete({
    where: {
      id: parseInt(id as string)
    }
  }).catch((error) => {
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