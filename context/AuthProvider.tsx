import { useSession } from '@/hooks';
import { createContext, PropsWithChildren, useContext } from 'react';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useSession('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession('react');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
