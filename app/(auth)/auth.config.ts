export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providers: [],
  callbacks: {
    authorized() {
      return true; // Always allow access to all routes
    },
  },
} satisfies NextAuthConfig;