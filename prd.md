Of course. Here is the revised and more detailed Product Requirements Document (PRD).

This version places a heavy emphasis on your core requirements: **simplicity, adherence to the exact scope of the course material, and providing explicit commands for deployment.** The language is direct and designed to be fed to an AI coding assistant like Cursor to generate code that is functional, correct for the assignment, and "human-like" in its simplicity.

---

# MP3: Refactoring a Static Website into a React Application

## 1. Project Mandate & Core Philosophy

This document outlines the refactoring of the existing MP-1 static resume website into a single-page application using React. The original MP-1 code is the **starting point** for this project.

**Guiding Philosophy: Simplicity is Key**
This is a beginner-level assignment. The primary goal is to demonstrate a fundamental understanding of React principles, not to create a complex or overly optimized application.

*   **Strictly Adhere to Scope:** The implementation must **only** use techniques and tools explicitly mentioned in this document and the assignment PDF. Do not introduce any other libraries, advanced hooks, or complex design patterns.
*   **No Advanced Code:** The code must be simple, readable, and look like it was written by a student learning React.
    *   **Allowed Hooks:** Primarily use `useState`. `useEffect` can be used if needed for fetching or side effects, but it is not required for the calculator. A single, simple custom hook for the calculator is permitted as per the instructions.
    *   **Forbidden Hooks:** Do not use `useMemo`, `useCallback`, `useReducer`, `useContext`, or other advanced hooks.
*   **Functionality Must Match MP-1:** The final React application must look and function **identically** to the original MP-1 website.
*   **No Code Comments:** The final code files (`.tsx`, `.css`) should not contain any comments. This document serves as the sole source of documentation and instructions.

## 2. Task-1: The React Refactoring Plan

### Step 2.1: Project Setup
1.  **Initialize Project:** Use Vite to create a new React project with TypeScript.
    ```bash
    npm create vite@latest mp-3 -- --template react-ts
    ```
2.  **Navigate and Install:**
    ```bash
    cd mp-3
    npm install
    ```
3.  **Install Required Libraries:** Install React Router for navigation and `styled-components` for styling, as they are required by the assignment.
    ```bash
    npm install react-router-dom styled-components
    ```

### Step 2.2: Migrate Static Assets from MP-1
1.  **CSS:** Copy `style.css` from the MP-1 project into the `src/` directory of the new `mp-3` project.
2.  **Import CSS:** Open `src/main.tsx` and add this import at the top to apply your existing styles globally:
    ```tsx
    // src/main.tsx
    import './style.css'; 
    ```
3.  **Image:** Copy the profile picture (`IMG_5270.png`) into the `public/` directory.

### Step 2.3: Convert Repetitive HTML into Reusable Components
Create a new folder: `src/components`.

1.  **`Header.tsx`:** Create this component. Its JSX will be the exact content of the `<header>` tag from any of the MP-1 HTML files.
2.  **`Nav.tsx`:** Create this component. Its JSX will be the content of the `<nav>` tag. **Important:** Replace all `<a>` tags with `<NavLink>` tags imported from `react-router-dom`. The `href` attribute must be changed to the `to` attribute (e.g., `<NavLink to="/education">`).
3.  **`Footer.tsx`:** Create this component. Its JSX will be the content of the `<footer>` tag.

### Step 2.4: Create a Reusable Page Layout
Create a master layout component to wrap all pages. This enforces the DRY principle.

1.  **`Layout.tsx`:** Create `src/components/Layout.tsx`. This component arranges the common UI elements and uses React Router's `<Outlet />` to render the specific page content.
    ```tsx
    import Header from './Header';
    import Nav from './Nav';
    import Footer from './Footer';
    import { Outlet } from 'react-router-dom';

    const Layout = () => {
      return (
        <>
          <Header />
          <div className="content-wrapper">
            <Nav />
            <Outlet />
          </div>
          <Footer />
        </>
      );
    };

    export default Layout;
    ```

### Step 2.5: Create Components for Each Page
Create a new folder: `src/pages`. For each page, copy the content from the corresponding `<main>` section of your MP-1 HTML files into the component's return statement.

*   `src/pages/HomePage.tsx`
*   `src/pages/EducationPage.tsx`
*   `src/pages/ExperiencePage.tsx`
*   `src/pages/LeadershipPage.tsx`
*   `src/pages/ProjectsPage.tsx`
*   `src/pages/ContactPage.tsx`

### Step 2.6: Implement Client-Side Routing
Configure routing in `App.tsx` using `createBrowserRouter` and `RouterProvider`. This will be the only component responsible for the application's routing logic.

1.  **Update `App.tsx`:**
    ```tsx
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
    ```

### Step 2.7: Refactor the Calculator with React Hooks
Refactor the DOM-based `calculator.js` into a React component using only `useState`.

1.  **Create `Calculator.tsx`:** Create a new component at `src/components/Calculator.tsx`.
2.  **Manage State:** Use `useState` for the two input numbers and the result.
    ```tsx
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [output, setOutput] = useState<string | number>('');
    ```
3.  **Event Handlers:** Convert the global JavaScript functions (`addition`, `subtraction`, etc.) into local handler functions inside the `Calculator` component. These functions will read from the state variables and update the `output` state.
4.  **Preserve Core Logic:**
    *   The `power` function **must** still use a `for` loop.
    *   The logic for displaying negative results in red must be replicated using conditional styling in JSX (e.g., `<h3 style={{ color: output < 0 ? 'red' : 'inherit' }}>{output}</h3>`).
5.  **Integrate:** Import and render the `<Calculator />` component within `src/pages/ProjectsPage.tsx`.

## 3. Task-2: Deployment Workflow (Git & Vercel)

Follow these exact commands in your terminal from the `mp-3` project root to deploy your application.

### Step 3.1: Initialize and Commit Your Code
1.  **Initialize Git:**
    ```bash
    git init
    ```
2.  **Add All Files:**
    ```bash
    git add .
    ```
3.  **Create Your First Commit:**
    ```bash
    git commit -m "Initial commit of MP3 React resume"
    ```

### Step 3.2: Push to GitHub
1.  Create a new, public repository on GitHub.com named `mp-3`.
2.  Copy the commands from the "...or push an existing repository from the command line" section on GitHub. They will look like this:
    ```bash
    # Ensure your main branch is named 'main'
    git branch -M main

    # Add the remote repository URL (replace with your own)
    git remote add origin https://github.com/YOUR_USERNAME/mp-3.git

    # Push your code to GitHub
    git push -u origin main
    ```

### Step 3.3: Deploy with Vercel
1.  Go to [vercel.com](https://vercel.com/) and sign up/log in with your GitHub account.
2.  On your dashboard, click **"Add New..."** -> **"Project"**.
3.  Find your `mp-3` GitHub repository in the list and click the **"Import"** button next to it.
4.  You do not need to change any settings. Simply click the **"Deploy"** button.
5.  Vercel will build and deploy your site. Once complete, click the screenshot or the URL to view your live application.