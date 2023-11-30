import { AppShell, ScrollArea } from "@mantine/core"
import { Route, Routes } from "react-router-dom";
import { Home, Learning, NotFound, Quiz } from "../pages";

export const PageSwitcher = () => {
  return (
    <AppShell.Main>
      <ScrollArea.Autosize mah={640}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ScrollArea.Autosize>
    </AppShell.Main>
  )
}