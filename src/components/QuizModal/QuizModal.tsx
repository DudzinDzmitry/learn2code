import { ActionIcon, Group, Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function QuizModal({ opened, close, prev, next, card }) {
  const [flipped, { close: hideAnswer, toggle }] = useDisclosure(false);
  return (
    <Modal
      opened={opened}
      onClose={() => {
        hideAnswer();
        close();
      }}
      w={300}
      h={300}
      withCloseButton={false}
      centered
    >
      <Title onClick={toggle} ta="center">
        {flipped ? card.answer : card.question}
      </Title>
      <Group justify="end" wrap="nowrap">
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
    </Modal>
  );
}
