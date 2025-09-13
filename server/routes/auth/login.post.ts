import { getUserByEmail } from "~/server/models/users";
import { checkPassword } from "~/server/utils/password";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string }>(event);
  const { email, password } = body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "이메일과 비밀번호는 필수입니다.",
    });
  }
  const userWithPassword = getUserByEmail(email);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: "사용자를 찾을 수 없습니다.",
    });
  }
  if (!checkPassword(password, userWithPassword.password)) {
    throw createError({
      statusCode: 401,
      statusMessage: "비밀번호가 올바르지 않습니다.",
    });
  }

  setCookie(event, "__user", JSON.stringify(userWithPassword));

  return {
    user: {
      id: userWithPassword.id,
      email: userWithPassword.email,
      roles: userWithPassword.roles,
    },
  };
});
