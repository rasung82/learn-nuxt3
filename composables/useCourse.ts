import type { Course } from '~/types/course';

export interface CourseReturn {
  course: Course | undefined;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
