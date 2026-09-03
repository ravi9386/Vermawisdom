import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Writing } from "./pages/Writing";
import { CreatePost } from "./pages/CreatePost";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experiments } from "./pages/Experiments";
import { PersonalFinance } from "./pages/PersonalFinance";
import { Library } from "./pages/Library";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/writing",
    Component: Writing,
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
    path: "/experiments",
    Component: Experiments,
  },
  {
    path: "/experiments/personal-finance",
    Component: PersonalFinance,
  },
  {
    path: "/library",
    Component: Library,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
