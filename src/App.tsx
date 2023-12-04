import "@mantine/core/styles.css";
import { AppShell } from "@mantine/core";
import { Router } from "./Router";

import { Header } from "./Header";

export default function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header />
      <AppShell.Main>
        <Router />
      </AppShell.Main>
    </AppShell>
  );
}
