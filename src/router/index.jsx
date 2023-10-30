import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BlockLayout from "./layouts/BlockLayout";
import FixedLayout from "./layouts/FixedLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Messenger from "../pages/Messenger";
import Account from "../pages/Account";
import Profile from "../pages/Profile";
import Legal from "../pages/Legal";
import Create from "../pages/Create";

import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";
import Story from "../pages/Story";
import FAQ from "../pages/FAQ";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BlockLayout />,

//     children: [
//       {
//         path: "",
//         element: <Outlet />,

//         children: [
//           {
//             index: true,
//             element: <Home />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "faq",
//             element: <FAQ />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "story",
//             element: <Story />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "account",
//             element: <Account />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "profile",
//             element: <Profile />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "legal",
//             element: <Legal />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <FixedLayout />,
//     children: [
//       {
//         path: "",
//         element: <Outlet />,

//         children: [
//           {
//             path: "chat",
//             element: <Messenger />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "create",
//             element: <Create />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "login",
//             element: <Login />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "register",
//             element: <Register />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "forgot-password",
//             element: <ForgotPassword />,
//             errorElement: <ProjectErrorBoundary />,
//           },
//           {
//             path: "not-found",
//             element: <NotFound />,
//           },
//           {
//             path: "server-error",
//             element: <ServerError />,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     path: "*",
//     element: <Navigate to="/not-found" />,
//   },
// ]);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes errorElement={<ServerError />}>
        <Route element={<FixedLayout />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/faq"} element={<FAQ />} />
          <Route path={"/story"} element={<Story />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/create"} element={<Create />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/chat"} element={<Messenger />} />
          <Route path={"/not-found"} element={<NotFound />} />
          <Route path={"/server-error"} element={<ServerError />} />
        </Route>
        <Route element={<BlockLayout />}>
          <Route index element={<Home />} />
          <Route path={"/account"} element={<Account />} />
          <Route path={"/legal"} element={<Legal />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
  //   );
};

export default Router;
