import { Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

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
                <div>IM GONNA COOOOOOOOOOODE!!</div>
                <Button size='sm' variant='link' onClick={toggleColorScheme}>
                    {computedColorScheme === "dark" ? "BIDEN BLAST" : "FOG"}
                </Button>
            </Flex>
        </AppShell.Header>
    )
}