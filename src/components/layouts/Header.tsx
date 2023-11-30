import { Group, AppShell, Burger, UnstyledButton, Tabs, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import Moon from '~icons/carbon/moon'
import Sun from '~icons/carbon/sun'

export const Header = ({ opened, toggle }: any) => {
  const navigate = useNavigate();
  const { tabVal } = useParams();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark')
  }

  return (
    <AppShell.Header>
      <Group justify="space-between" style={{ padding: '7.5px 20px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size="sm" />
        <Tabs
        value={tabVal}
        onChange={(value) => navigate(`${value}`)}
        visibleFrom="sm"
        >
          <Tabs.List>
            <Tabs.Tab value='/'>Home</Tabs.Tab>
            <Tabs.Tab value="/learning">Learning</Tabs.Tab>
            <Tabs.Tab value="/quiz">Quiz</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <UnstyledButton size='sm' onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <Sun /> : <Moon />}
        </UnstyledButton>
      </Group>
    </AppShell.Header>
  )
}