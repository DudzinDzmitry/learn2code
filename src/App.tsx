import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header, Navbar, PageSwitcher } from "./components/layouts"

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300, breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <AppShell.Main>
        <PageSwitcher />
      </AppShell.Main>
    </AppShell>
  );
}