import type { User, UserWithoutPassword } from "~/types/user";

const users: User[] = [
  {
    id: "66fad0b6-06d0-4767-9ef3-fe9d0173add2",
    email: "admin@gmail.com",
    password: "qwer1234",
    roles: ["ADMIN"],
  },
  {
    id: "c7c00dae-8e59-4029-83e2-4b265eb54a22",
    email: "user@gmail.com",
    password: "qwer1234",
    roles: ["USER"],
  },
];

/**
 * 이메일과 비밀번호가 일치하는 사용자를 찾아서 반환합니다.
 */
export function getUser(
  email: string,
  password: string
): Maybe<UserWithoutPassword> {
  const foundUser = users.find(
    (u) => u.email === email && u.password === password
  );
  if (foundUser) {
    return {
      id: foundUser.id,
      email: foundUser.email,
      roles: foundUser.roles,
    };
  }
}

/**
 * 이메일로 사용자를 찾아서 반환합니다.
 */
export function getUserByEmail(email: string): Maybe<User> {
  return users.find((u) => u.email === email);
}
