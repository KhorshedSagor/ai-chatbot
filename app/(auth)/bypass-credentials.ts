// bypass-credentials.ts

import CredentialsProvider from 'next-auth/providers/credentials';

export const BypassCredentials = CredentialsProvider({
  name: 'Bypass Credential',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'demo' },
  },

  async authorize(credentials, req) {
    const user = { id: 'demo', name: 'Demo User' };
    return user;
  }
});