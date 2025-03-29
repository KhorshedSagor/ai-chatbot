// auth.js

import { BypassCredentials } from './bypass-credentials';

// ...

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [BypassCredentials],
  
// ...