import prisma from '../instances/prisma';

export default {
  getAllUsers: async () => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        city: true
      }
    });

    return users;
  },

  addUser: async (name: string, email: string, city: string) => {
    let newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        city: city
      }
    });

    return newUser;
  },

  getOneUser: async (id: number) => {
    let user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });

    return user;
  },

  getPutUser: async (name: string, city: string, id: number) => {
    const updateUser = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        city: city
      }
    });

    return updateUser;
  },

  deleteUser: async (id: number) => {
    return await prisma.user.delete({
      where: {
        id: id
      }
    });
  }
};