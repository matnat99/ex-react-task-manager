import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

// Pages
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Lista Task</NavLink>
          <NavLink to="/add">Aggiungi Task</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}
