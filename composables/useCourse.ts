import type { Course } from '~/types/course';

export interface CourseReturn {
  course: Course | undefined | null;
  prevCourse: Course | undefined | null;
  nextCourse: Course | undefined | null;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];

  return {
    course,
    prevCourse,
    nextCourse,
  };
};
