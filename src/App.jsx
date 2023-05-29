import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminPage, { dataLoaderAdmin } from "./pages/AdminPage";
import { dataLoaderUser } from "./pages/HomePage";
import AdminLayout from "./layouts/AdminLayout";
import MealsPage, { dataLoaderMeals } from "./pages/MealsPage";
import MealDetailsPage, { loaderMealDetails, mealDeleteAction } from "./pages/MealDetailsPage";
import MealEditPage from "./pages/MealEditPage";
import MealNewPage from "./pages/MealNewPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: dataLoaderUser,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
        loader: dataLoaderAdmin,
      },
      {
        path: "/admin/meals",
        element: <MealsPage />,
        loader: dataLoaderMeals,
      },
      {
        path: "/admin/meals/:mealId",
        id: "meal-details",
        loader: loaderMealDetails,
        children: [
          {
            index: true,
            element: <MealDetailsPage />,
            action: mealDeleteAction,
          },
          {
            path: "edit",
            element: <MealEditPage />,
            // loader
          }
        ]
      },
      {
        path: "new",
        element: <MealNewPage />,
        // action
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
