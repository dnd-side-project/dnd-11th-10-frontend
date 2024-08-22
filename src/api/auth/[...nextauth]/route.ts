import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
}
const handler = NextAuth(authOptions)

export { authOptions, handler as GET, handler as POST }
