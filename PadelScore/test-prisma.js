import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Replace `user` with a model that exists in your schema.prisma
  const users = await prisma.user.findMany();
  console.log('Users:', users);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
const newUser = await prisma.user.create({
  data: { name: "Test User", email: "test@example.com" }
});
console.log(newUser);
