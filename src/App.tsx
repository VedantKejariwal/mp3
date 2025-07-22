import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import LeadershipPage from './pages/LeadershipPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'education', element: <EducationPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'leadership', element: <LeadershipPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
