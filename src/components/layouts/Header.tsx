import { Group, AppShell, Burger, UnstyledButton, Tabs, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import Moon from '~icons/carbon/moon'
import Sun from '~icons/carbon/sun'

const data: { [name: string]: string }[] = [
  { "label": "Home", "link": "/" },
  { "label": "Courses", "link": "/courses" },
  { "label": "Quizzes", "link": "/quizzes" },
]

export const Header = ({ opened, toggle }: any) => {
  // nav content
  const tabs = data.map((item) => (
    <Tabs.Tab value={item.link}>{item.label}</Tabs.Tab>
  ));

  // navigation
  const navigate = useNavigate();
  const { tabVal } = useParams();

  //theme change
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
          <Tabs.List>{tabs}</Tabs.List>
        </Tabs>
        <UnstyledButton size='sm' onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <Sun /> : <Moon />}
        </UnstyledButton>
      </Group>
    </AppShell.Header>
  )
}