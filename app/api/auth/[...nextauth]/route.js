/* import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

}

)

export { handler as GET, handler as POST }
 */

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
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id
            return session
        },
    },
    cookies: {
        sessionToken: {
            name: "next-auth.session-token", // Možeš promeniti ime ako je potrebno
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",  // Za produkciju, postavi secure
                sameSite: "lax",  // Možeš koristiti "strict" za stroži način zaštite
                path: "/",
                maxAge: 60 * 60 * 24 * 30, // 30 dana
            },
        },
    },
})

export { handler as GET, handler as POST }
