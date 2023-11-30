import { AppShell, NavLink } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const data: { [name: string]: string }[] = [
  { "label": "Home", "link": "/" },
  { "label": "Learning", "link": "/learning" },
  { "label": "Quiz", "link": "/quiz" },
]

export const Navbar = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => {
        setActive(index)
        navigate(`${item.link}`)
      }}
    />
  ));

  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      {items}
    </AppShell.Navbar>
  )
}