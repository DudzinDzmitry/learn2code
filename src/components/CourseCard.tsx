import { Card, Image, Text } from '@mantine/core';

export const CourseCard = ({ course }: any) => {
  return (
    <Card
      w={350}
      h={275}
      shadow="sm"
      padding="xl"
      component="a"
      href={course.Link}
      target="_blank"
    >
      <Card.Section>
        <Image
          src={course.Poster}
          h={150}
          alt="No preview"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {course.Title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {course.Description}
      </Text>
    </Card>
  )
}