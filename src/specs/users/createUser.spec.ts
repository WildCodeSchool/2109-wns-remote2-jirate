import createUser from '../../service/userService';
import {PrismaClient} from '@prisma/client';

interface UserType {
    firstname: string
    lastname: string
    email: string
    password: string
}

const prisma = new PrismaClient();

afterAll(async (done) => {
    await prisma.$disconnect();
    done();
})

describe("Users actions", () => {
    it('create new user', async () => {
        const user: UserType = {
            firstname: "testingUser",
            lastname: "test",
            email: "testuser@testing.com",
            password: "testingpassword"
        }

        await createUser({user})

        const [savedUser] = await prisma.user.findMany({
            where: { user.email },
            take: 1
        })

        expect(savedUser.email).toBe(user.email);
    })
})