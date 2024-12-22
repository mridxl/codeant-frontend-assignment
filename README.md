# CodeAnt Frontend Developer Intern Hiring Assignment

This project is a frontend implementation based on a design provided by CodeAnt for a Frontend Developer Intern Hiring Assignment. The application is built using React, TypeScript, and Vite, adhering to best practices for clean, maintainable, and scalable code.

## Project Setup

To run the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mridxl/codeant-frontend-assignment
    cd codeant-frontend-assignment
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This command starts the Vite development server, and you can view the project running at `http://localhost:5173` in your browser.

## Project Structure

The application's structure follows a component based approach:

- **`public/`:** Contains static assets such as images, logos etc.
- **`src/`:** Contains the application's source code.
  - **`App.tsx`:** Main application component managing routes.
  - **`components/`:** Contains all the components used.
    - `ui/` : Contains reusable UI components.
    - `Login/` : Contains the login related components
    - `Layout.tsx`: The layout component for the application.
    - `Sidebar.tsx`: Sidebar for navigation on the dashboard.
  - **`db/`:** Placeholder data for repositories.
  - **`lib/`:** Contains utility functions and hooks.
  - **`pages/`:** Contains pages for the app.
    - `Dashboard.tsx`: The main dashboard page.
    - `Login.tsx`: The main login page.
  - **`index.css`:** Global styles for the application.
