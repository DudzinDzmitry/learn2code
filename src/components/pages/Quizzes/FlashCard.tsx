import { Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'

export function FlashCard({ card }: any) {
  const [flipped, { toggle }] = useDisclosure(false);
  return (
    <Center onClick={toggle}>{flipped ? card.Question : card.Answer}</Center>
  )
}
