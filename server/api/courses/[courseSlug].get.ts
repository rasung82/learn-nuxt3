import { getCourseDetail } from "~/server/models/courses";

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, "courseSlug");
  const courseDetail = getCourseDetail(courseSlug!);

  if (!courseDetail.course) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }

  return courseDetail;
});
