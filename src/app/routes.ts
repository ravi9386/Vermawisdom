import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { PersonalFinance } from "./pages/PersonalFinance";
import { RetirementCalculator } from "./pages/RetirementCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/create",
    Component: CreatePost,
  },
  {
    path: "/post/:id",
    Component: BlogPost,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/pf",
    Component: PersonalFinance,
  },
  {
    path: "/retirement-calculator",
    Component: RetirementCalculator,
  },
]);
