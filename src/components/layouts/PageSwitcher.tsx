import { AppShell, ScrollArea } from "@mantine/core"
import { Route, Routes } from "react-router-dom";
import { Home, CourseList, NotFound, QuizList } from "../pages";

export const PageSwitcher = () => {
  return (
    <AppShell.Main>
      <ScrollArea.Autosize mah={640}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/quizzes" element={<QuizList />} />
        </Routes>
      </ScrollArea.Autosize>
    </AppShell.Main>
  )
}