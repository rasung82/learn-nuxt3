import type { UserWithoutPassword } from "~/types/user";
import { getUser } from "./usersData";
import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
  const authUser = useAuthUser();

  const signIn = (email: string, password: string) => {
    const user = getUser(email, password);

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password",
      });
    }
    authUser.value = user;
  };

  const signOut = () => {
    authUser.value = null;
  };

  return {
    signIn,
    signOut,
  };
};
