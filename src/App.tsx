import React from 'react';
import { Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Home } from './components/Home';
import { Learning } from './components/Learning';

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [currentPage, setCurPage] = React.useState<string>('home');

  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark')
  }
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size="sm" />
          <div>IM GONNA COOOOOOOOOOODE!!</div>
          <Button size='sm' variant='link' onClick={toggleColorScheme}>
            {computedColorScheme === "dark" ? "BIDEN BLAST" : "FOG"}
          </Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{ gap: "10px" }}>
        <Button onClick={() => setCurPage('home')} style={{ margin: '5px' }}>home</Button>
        <Button onClick={() => setCurPage('learning')} style={{ margin: '5px' }}>learning</Button>
      </AppShell.Navbar>
      <AppShell.Main>
        {currentPage === "home" ? <Home /> : <Learning />}
      </AppShell.Main>
    </AppShell>

  );
}