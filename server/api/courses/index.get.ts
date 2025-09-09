import { getCourses } from "~/server/models/courses";

export default defineEventHandler(() => {
  return getCourses();
});
