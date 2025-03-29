import type { NextAuthConfig } from "next-auth"; // or the correct import for your version

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providers: [], // providers will be added in auth.ts
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      
      // Bypass auth in development
      if (process.env.NODE_ENV === 'development') {
        return true;
      }

      const isOnChat = nextUrl.pathname.startsWith('/');
      const isOnRegister = nextUrl.pathname.startsWith('/register');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL('/', nextUrl));
      }

      if (isOnRegister || isOnLogin) {
        return true;
      }

      return isLoggedIn;
    },
  },
} satisfies NextAuthConfig;