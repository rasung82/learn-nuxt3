import type { UserWithoutPassword } from "~/types/user";
import { getUser } from "./usersData";
import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
  const authUser = useAuthUser();

  const setUser = (user: Maybe<UserWithoutPassword>) => (authUser.value = user);

  const signIn = (email: string, password: string) => {
    const foundUser = getUser(email, password);
    if (!foundUser) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password",
      });
    }
    setUser(foundUser);
  };

  const signOut = () => setUser(null);

  return {
    signIn,
    signOut,
  };
};
