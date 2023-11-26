import { AppShell, NavLink } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <AppShell.Navbar p="md" style={{ gap: "10px" }}>
            <NavLink
                label="Home"
                onClick={() => navigate('/')}
                style={{ margin: '5px' }}
            />
            <NavLink
                label="Learning"
                onClick={() => navigate('/learning')}
                style={{ margin: '5px' }}
            />
        </AppShell.Navbar>
    )
}