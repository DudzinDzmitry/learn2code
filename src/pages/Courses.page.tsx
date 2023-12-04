import {
  Group,
  Card,
  Text,
  Image,
  Stack,
  Autocomplete,
  Button,
} from "@mantine/core";
import { useDisclosure, useInputState, useListState } from "@mantine/hooks";
import { COURSESDATA } from "../assets/Courses/Courses.data";
import { AddCourseModal } from "../components/AddCourseModal/AddCourseModal";

export function CoursePage() {
  const [query, setQuery] = useInputState("");
  const [opened, { close, open }] = useDisclosure(false);
  const [courses, setCourses] = useListState(COURSESDATA);
  const soughtCourses = courses.filter((item) =>
    item.title.toLowerCase().trim().includes(query.toLowerCase().trim())
  );

  return (
    <Stack mt={30} align="center">
      <AddCourseModal opened={opened} close={close} setCourses={setCourses} />
      <Group justify="center" align="center" wrap="nowrap">
        <Autocomplete
          placeholder="Search..."
          value={query}
          onChange={setQuery}
          data={courses.map((course) => course.title)}
        />
        <Button onClick={open}>Add Course +</Button>
      </Group>
      <Group mih={50} justify="center" align="center" wrap="wrap">
        {soughtCourses.map((course: any) => (
          <Card
            withBorder
            shadow="md"
            mt={30}
            radius="md"
            w={350}
            h={300}
            component="a"
            href={course.link}
            target="_blank"
          >
            <Card.Section>
              <Image src={course.image} h={150} alt="No preview" />
            </Card.Section>
            <Text fw={500} mt="sm" size="md">
              {course.title}
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              {course.description}
            </Text>
          </Card>
        ))}
      </Group>
    </Stack>
  );
}
