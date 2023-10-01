import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";
import { profile } from "console";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const userSession = await User.findOne({ email: session.user.email });
            session.user.id = userSession._id.toString();
            return session;
        },
        async profile({ profile }) {
            try {
                await connectToDB();

                //Check if a user exist
                const userExists = await User.findOne({ email: profile.email });
                //if not create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };