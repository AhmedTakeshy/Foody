import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import { dataLoaderUser } from "./pages/HomePage";
import AdminLayout, { dataLoaderAdmin } from "./layouts/AdminLayout";
import MealsPage, { dataLoaderMeals } from "./pages/MealsPage";
import MealDetailsPage, { loaderMealDetails, mealDeleteAction } from "./pages/MealDetailsPage";
import MealEditPage from "./pages/MealEditPage";
import MealNewPage from "./pages/MealNewPage";
import { editOrDeleteMeal } from "./components/admin/meals/MealForm";
import Orders from "./pages/OrdersPage";
import ReservationsPage from "./pages/ReservationsPage";
import ContactsPage from "./pages/ContactsPage";
import OrdersPage from "./pages/OrdersPage";
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
    loader: dataLoaderAdmin,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
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
            action: editOrDeleteMeal,
          }
        ]
      },
      {
        path: "/admin/meals/new",
        element: <MealNewPage />,
        action: editOrDeleteMeal,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "reservations",
        element: <ReservationsPage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
