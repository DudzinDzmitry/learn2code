import { Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import Moon from '~icons/carbon/moon'
import Sun from '~icons/carbon/sun'

export const Header = ({ opened, toggle }: any) => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark')
    }
    return (
        <AppShell.Header>
            <Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
                <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size="sm" />
                <div></div>
                <Button size='sm' variant='link' onClick={toggleColorScheme}>
                    {computedColorScheme === "dark" ? <Sun /> : <Moon />}
                </Button>
            </Flex>
        </AppShell.Header>
    )
}