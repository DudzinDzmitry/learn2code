import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header, Navbar, PageSwitcher } from "./components/layouts"

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      withBorder={false}
      header={{ height: 50 }}
      navbar={{
        width: { sm: 300 }, breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened }
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <PageSwitcher />
    </AppShell >
  );
}