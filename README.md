# ROOKIE_HACKERS_Omega5.0
# BigBasket Clone🛒

Welcome to BigBasket clone, a responsive web application designed to simulate a seamless online grocery shopping experience. Built with a modern tech stack, this project focuses on user-centric features like smart cart recommendations, in-cart subscriptions, and one-click reordering to make grocery shopping fast and intuitive.

---

## 📸 Screenshot

*A vibrant screenshot of the main product page.*

![BigBasket clone Screenshot](https://i.imgur.com/YOUR_SCREENSHOT_CODE.png)  <!-- 👈 **UPDATE THIS IMAGE** -->

---

## ✨ Features

-   **Product Browsing:** A clean, grid-based layout to view all available groceries.
-   **Dynamic Shopping Cart:** A slide-in sidebar cart where users can add, remove, and update item quantities in real-time.
-   **Smart Cart Suggestions:** The cart intelligently recommends related items ("You might also like...") based on its contents.
-   **In-Cart Subscriptions:** Users can toggle a "Subscribe & Save 5%" option for any item directly within the cart, with the total price updating instantly.
-   **One-Click Reorder:** After a simulated checkout, purchased items are saved as "Favorites." When the cart is empty, this section appears, allowing users to re-add past purchases with a single click.
-   **Persistent State:** The app uses the browser's `localStorage` to remember past orders, ensuring your "Reorder Favorites" list is available even after closing the browser.
-   **Fully Responsive:** A seamless experience on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

-   **Build Tool:** [Vite](https://vitejs.dev/) - For a blazing-fast development experience.
-   **Frontend Library:** [React](https://reactjs.org/) - For building the user interface.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - For robust, type-safe code.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) - A collection of beautifully designed, accessible components.
-   **State Management:** Native React Hooks (`useState`, `useCallback`, `useMemo`).
-   **Client-Side Storage:** Browser `localStorage` for persisting cart state and reorder history without a backend.

---

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rudraksh-sinha/ROOKIE_HACKERS_Omega5.0
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Big-basket-Main
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:8080` (or another port if 8080 is busy).

---

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Bundles the app for production to the `dist` folder.
-   `npm run lint`: Lints the code for errors and style issues using ESLint.
-   `npm run preview`: Serves the production build locally to preview it before deployment.
