import { useNavigate } from "react-router-dom";
import { IconSun, IconMoon } from "@tabler/icons-react";
import {
  ActionIcon,
  AppShell,
  Group,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

export function Header() {
  const navigate = useNavigate();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <AppShell.Header>
      <Group justify="space-between" h="100%" px="md" ml="lg" mr="lg" gap={0}>
        <Group justify="center">
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === "light" ? (
              <IconMoon stroke={1.5} />
            ) : (
              <IconSun stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
        <Group justify="center">
          <UnstyledButton onClick={() => navigate("/")}>Home</UnstyledButton>
          <UnstyledButton onClick={() => navigate("/course")}>
            Course
          </UnstyledButton>
          <UnstyledButton onClick={() => navigate("/quiz")}>
            Quiz
          </UnstyledButton>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
