import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: 'IamVeryHandsome',
  callbacks: {
    async redirect({ url, baseUrl }:any) {
      // Always redirect to the upload page after sign in
      return `${baseUrl}/upload`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
