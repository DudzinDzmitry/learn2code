import { AppShell } from "@mantine/core"
import { Route, Routes } from "react-router-dom";
import { Home, Learning, NotFound } from "../pages";

export const PageSwitcher = () => {
  return (
    <AppShell.Main>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </AppShell.Main>
  )
}