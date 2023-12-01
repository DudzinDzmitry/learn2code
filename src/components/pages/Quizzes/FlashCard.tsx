import { Card, Text, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'

export function FlashCard({ card }: any) {
  const [flipped, { toggle }] = useDisclosure(false);
  return (

    <Card
      onClick={toggle}
      w={350}
      h={275}
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
    >
      <Text fw={500} size="lg" mt="md">
        {card.Question}
      </Text>
      <Transition mounted={flipped} transition="rotate-left" duration={400}>
        {(transitionStyle) => (
          <Text fw={500} size="lg" mt="md" style={transitionStyle}>
            {card.Answer}
          </Text>
        )}
      </Transition>

    </Card>

  )
}
