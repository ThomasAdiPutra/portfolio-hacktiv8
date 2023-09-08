import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Layout from "../layouts";
import Experience from "../pages/experience";
import Education from "../pages/education";
import Skill from "../pages/skill";
import Interest from "../pages/interest";
import Award from "../pages/award";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/education", element: <Education /> },
      { path: "/skills", element: <Skill /> },
      { path: "/interests", element: <Interest /> },
      { path: "/awards", element: <Award /> },
    ],
  },
], {
  basename: "/portfolio",
});

export default router;
