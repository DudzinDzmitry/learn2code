import { Button, Stack } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { QuizModal } from "../components/QuizModal/QuizModal";
import { QUESTIONSDATA } from "../assets/Questions/Questions.data";

export function QuizPage() {
  const [opened, setOpened] = useListState(
    Array(QUESTIONSDATA.length).fill(false)
  );
  return (
    <Stack mt={30} align="center">
      <Button
        onClick={() => {
          setOpened.setItem(0, true);
        }}
      >
        Start Quiz
      </Button>
      {QUESTIONSDATA.map((card: any, index: number) => (
        <QuizModal
          opened={opened[index]}
          close={() => {
            setOpened.setItem(index, false);
          }}
          prev={() => {
            setOpened.setItem(index, false);
            setOpened.setItem(index - 1, true);
          }}
          next={() => {
            setOpened.setItem(index, false);
            setOpened.setItem(index + 1, true);
          }}
          card={card}
          index={index}
        />
      ))}
    </Stack>
  );
}
