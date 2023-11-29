import { Flex, Card, Text } from '@mantine/core';

export const Quiz = () => {
  const card1: { [name: string]: string } = {
    "Question": "What happened in 87'",
    "Answer": "WAS THAT THE BIT OF 87'??????"
  }
  const cards: any = [card1, card1, card1, card1, card1, card1, card1]
  return (
    <Flex
      mih={50}
      gap="sm"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      {
        cards.map((card: { [name: string]: string }) => (
          <Card
            shadow="sm"
            padding="xl"
          >
            <Text fw={500} size="lg" mt="md">
              {card.Question}
            </Text>
          </Card>
        ))
      }
    </Flex>
  )
}