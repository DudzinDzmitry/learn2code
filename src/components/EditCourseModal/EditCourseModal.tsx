import { Button, Modal, Paper, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

export function EditCourseModal({ opened, close, index, course, setCourses }) {
  const [value1, setValue1] = useInputState(`${course.title}`);
  const [value2, setValue2] = useInputState(`${course.description}`);
  const [value3, setValue3] = useInputState(`${course.image}`);
  const [value4, setValue4] = useInputState(`${course.link}`);
  return (
    <Modal opened={opened} onClose={close} title="Edit this course" centered>
      <Paper shadow="md" radius="md">
        <TextInput
          label="Course Title"
          required
          value={value1}
          onChange={(e) => setValue1(e.currentTarget.value)}
        />
        <TextInput
          label="Course Description"
          required
          value={value2}
          onChange={(e) => setValue2(e.currentTarget.value)}
        />
        <TextInput
          label="Course Image"
          required
          value={value3}
          onChange={(e) => setValue3(e.currentTarget.value)}
        />
        <TextInput
          label="Course Link"
          required
          value={value4}
          onChange={(e) => setValue4(e.currentTarget.value)}
        />
        <Button
          onClick={() => {
            setCourses.setItem(index, {
              title: value1,
              description: value2,
              image: value3,
              link: value4,
            });
            close();
          }}
          fullWidth
          mt="xl"
        >
          Submit
        </Button>
      </Paper>
    </Modal>
  );
}
