import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PersonalFinance } from "./pages/PersonalFinance";
import { RetirementCalculator } from "./pages/RetirementCalculator";
import { Ecommerce } from "./pages/Ecommerce";
import { ProductDetail } from "./pages/ProductDetail";

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
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/pf",
    Component: PersonalFinance,
  },
  {
    path: "/retirement-calculator",
    Component: RetirementCalculator,
  },
  {
    path: "/ecommerce",
    Component: Ecommerce,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
]);
