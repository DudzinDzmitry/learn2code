import { Group } from '@mantine/core';
import { FlashCard } from "./FlashCard"

const cards: { [name: string]: string }[] = [
  {
    "Question": "What happened in 87'",
    "Answer": "WAS THAT THE BIT OF 87'??????"
  },
  {
    "Question": "What happened in 87'",
    "Answer": "WAS THAT THE BIT OF 87'??????"
  },
  {
    "Question": "What happened in 87'",
    "Answer": "WAS THAT THE BIT OF 87'??????"
  },
]

export const QuizList = () => {

  return (
    <Group
      mih={50}
      justify="center"
      align="center"
      wrap="wrap"
    >
      {
        cards.map((card: { [name: string]: string }) => (
          <FlashCard card={card} />
        ))
      }
    </Group>
  )
}