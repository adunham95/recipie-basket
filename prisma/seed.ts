import { PrismaClient } from '@prisma/client';

export const links = [
  {
    category: 'Open Source',
    description: 'Fullstack React framework',
    imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
    title: 'Next.js',
    url: 'https://nextjs.org',
  },
  {
    category: 'Open Source',
    description: 'Next Generation ORM for TypeScript and JavaScript',
    imageUrl: 'https://www.prisma.io/images/og-image.png',
    title: 'Prisma',
    url: 'https://prisma.io',
  },
  {
    category: 'Open Source',
    description: 'Utility-fist css framework',
    imageUrl:
      'https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg',
    title: 'TailwindCSS',
    url: 'https://tailwindcss.com',
  },
  {
    category: 'Open Source',
    description: 'GraphQL implementation ',
    imageUrl: 'https://www.apollographql.com/apollo-home.jpg',
    title: 'Apollo GraphQL',
    url: 'https://apollographql.com',
  },
];

const prisma = new PrismaClient();

async function main() {
  // const password = await hash('password123', 12);
  // const user = await prisma.user.upsert({
  //   where: { email: 'admin@admin.com' },
  //   update: {},
  //   create: {
  //     email: 'admin@admin.com',
  //     name: 'Admin',
  //     password,
  //   },
  // });
  // console.log({ user });
  await prisma.link.createMany({
    data: links,
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
