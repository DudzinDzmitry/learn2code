import { Button, Modal, Paper, Text } from "@mantine/core";

export function QuizModal({ opened, close }) {
  return (
    <Modal opened={opened} onClose={close} size="auto">
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text>What?</Text>
        <Button onClick={close} fullWidth mt="xl">
          Submit
        </Button>
      </Paper>
    </Modal>
  );
}
