import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // Koristi JWT kao strategiju za sesije
    },
    callbacks: {
        async jwt({ token, user }) {
            try {
                if (user) {
                    token.id = user.id;
                }
                console.log('JWT Token:', JSON.stringify(token, null, 2));
                return token;
            } catch (error) {
                console.error('Error in JWT callback:', error);
                throw error;
            }
        },
        async session({ session, token }) {
            try {
                session.user.id = token.id;
                console.log('Session Data:', JSON.stringify(session, null, 2));
                return session;
            } catch (error) {
                console.error('Error in Session callback:', error);
                throw error;
            }
        }
    },
});

export { handler as GET, handler as POST }
