import { Group } from '@mantine/core';
import { CourseCard } from '../CourseCard'

export const Learning = () => {
  const course1: { [name: string]: string } = {
    "Poster": "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    "Title": "You've won a million dollars!",
    "Description": "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    "Link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  }
  const courses: any = [course1, course1, course1, course1, course1, course1, course1,]
  return (
    <Group
      mih={50}
      justify="center"
      align="center"
      wrap="wrap"
    >
      {
        courses.map((course: { [name: string]: string }) => (
          <CourseCard course={course} />
        ))
      }
    </Group>
  )
}