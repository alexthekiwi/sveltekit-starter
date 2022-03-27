import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

interface UserDTO {
    name?: User['name'];
    email?: User['email'];
    password?: User['password'];
};

export const users: UserDTO[] = [
    {
        email: 'name@example.com',
        name: 'John Doe',
        password: 'password',
    },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const data of users) {
    const user = await prisma.user.create({ data });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
