import MainLayout from 'layouts/MainLayout';
import ErrorPage from 'pages/ErrorPage';
import HomePage from 'pages/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {path: '',element: <>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
