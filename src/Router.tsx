import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { CoursePage } from "./pages/Courses.page";
import { QuizPage } from "./pages/Quiz.page";
import { NotFound } from "./pages/NotFound.page";

const router = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
];

export function Router() {
  return (
    <Routes>
      {router.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
