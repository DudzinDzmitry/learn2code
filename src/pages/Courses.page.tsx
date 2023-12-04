import {
  Group,
  Card,
  Text,
  Image,
  Stack,
  Autocomplete,
  Button,
  Menu,
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
    <Stack mt={20} align="center">
      <AddCourseModal opened={opened} close={close} setCourses={setCourses} />
      <Group wrap="nowrap">
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
          <Menu
            trigger="hover"
            openDelay={200}
            closeDelay={200}
            width={400}
            withinPortal
          >
            <Menu.Target>
              <Card
                withBorder
                shadow="lg"
                mt={20}
                radius="md"
                w={400}
                h={350}
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
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Delete</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ))}
      </Group>
    </Stack>
  );
}
