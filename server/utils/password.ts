export const checkPassword = (plain: string, hashed: string): boolean => {
  return plain === hashed;
};
