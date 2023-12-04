import { Button, Modal, Paper, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

export function AddCourseModal({ opened, close, setCourses }) {
  const [value1, setValue1] = useInputState("");
  const [value2, setValue2] = useInputState("");
  const [value3, setValue3] = useInputState("");
  const [value4, setValue4] = useInputState("");
  return (
    <Modal opened={opened} onClose={close} title="Add your course" centered>
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
            setCourses.append({
              title: value1,
              description: value2,
              image: value3,
              link: value4,
            });
            close;
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
