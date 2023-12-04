import { Title, Text, Button, Container, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title ta="center" mt={100}>
        404
      </Title>
      <Title ta="center">You have found a secret place.</Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button onClick={() => navigate("/")} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
