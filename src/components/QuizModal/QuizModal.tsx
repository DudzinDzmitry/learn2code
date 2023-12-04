import { ActionIcon, Group, Modal, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function QuizModal({ opened, close, prev, next, card, index }) {
  const [flipped, { close: hideAnswer, toggle }] = useDisclosure(false);
  return (
    <Modal
      opened={opened}
      onClose={() => {
        hideAnswer();
        close();
      }}
      withCloseButton={false}
      centered
    >
      <Title onClick={toggle} ta="center">
        {flipped ? card.answer : card.question}
      </Title>
      <Group justify="space-between" wrap="nowrap">
        <Text ml={10}>{index + 1}</Text>
        <Group>
          <ActionIcon
            onClick={() => {
              hideAnswer();
              prev();
            }}
            variant="default"
            size="lg"
            aria-label="prev"
          >
            <IconChevronLeft />
          </ActionIcon>
          <ActionIcon
            onClick={() => {
              hideAnswer();
              next();
            }}
            variant="default"
            size="lg"
            aria-label="prev"
          >
            <IconChevronRight />
          </ActionIcon>
        </Group>
      </Group>
    </Modal>
  );
}
