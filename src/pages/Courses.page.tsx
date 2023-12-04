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
import { EditCourseModal } from "../components/EditCourseModal/EditCourseModal";

export function CoursePage() {
  const [query, setQuery] = useInputState("");
  const [openedAdd, { close: closeAdd, open: openAdd }] = useDisclosure(false);
  const [courses, setCourses] = useListState(COURSESDATA);
  const [openedEdit, setOpenedEdit] = useListState(
    Array(COURSESDATA.length).fill(false)
  );
  const soughtCourses = courses.filter((item) =>
    item.title.toLowerCase().trim().includes(query.toLowerCase().trim())
  );

  return (
    <Stack mt={20} align="center">
      <AddCourseModal
        opened={openedAdd}
        close={closeAdd}
        setCourses={setCourses}
      />
      <Group wrap="nowrap">
        <Autocomplete
          placeholder="Search..."
          value={query}
          onChange={setQuery}
          data={courses.map((course) => course.title)}
        />
        <Button onClick={openAdd}>Add Course +</Button>
      </Group>
      <Group mih={50} justify="center" align="center" wrap="wrap">
        {soughtCourses.map((course: any, index: number) => (
          <>
            <EditCourseModal
              key={index}
              opened={openedEdit[index]}
              close={() => {
                setOpenedEdit.setItem(index, false);
              }}
              index={index}
              course={course}
              setCourses={setCourses}
            />
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
                <Menu.Item
                  onClick={() => {
                    setOpenedEdit.setItem(index, true);
                  }}
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setCourses.remove(index);
                  }}
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        ))}
      </Group>
    </Stack>
  );
}
