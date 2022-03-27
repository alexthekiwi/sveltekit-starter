/* eslint-disable @typescript-eslint/no-namespace */
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

declare global {
    namespace NodeJS {
        interface Global {
            prisma: pkg.PrismaClient<pkg.Prisma.PrismaClientOptions, never, pkg.Prisma.RejectOnNotFound | pkg.Prisma.RejectPerOperation>;
        }
    }
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
