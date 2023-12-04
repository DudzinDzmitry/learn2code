import { Button, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { QuizModal } from "../components/QuizModal/QuizModal";

export function QuizPage() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Stack mt={30} align="center">
      <QuizModal opened={opened} close={close} />
      <Button onClick={open}>Start Quiz</Button>
    </Stack>
  );
}
