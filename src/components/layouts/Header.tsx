import { Group, AppShell, Burger, Button, NavLink, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Moon from '~icons/carbon/moon'
import Sun from '~icons/carbon/sun'

export const Header = ({ opened, toggle }: any) => {
  const navigate = useNavigate();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark')
  }

  return (
    <AppShell.Header>
      <Group justify="space-between" style={{ padding: '7.5px 20px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size="sm" />
        <Group gap={0} visibleFrom="sm">
          <NavLink
            label="Home"
            onClick={() => navigate('/')}
          />
          <NavLink
            label="Learning"
            onClick={() => navigate('/learning')}
          />
          <NavLink
            label="Quiz"
            onClick={() => navigate('/quiz')}
            style={{ margin: '5px' }}
          />
        </Group>
        <Button size='sm' onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </Group>
    </AppShell.Header>
  )
}