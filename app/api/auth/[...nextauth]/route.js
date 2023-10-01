import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        try {
            await connectToDB();

            //Check if a user exist
            //if not create a new user
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    async profile({ profile }) { }
});

export { handler as GET, handler as POST };