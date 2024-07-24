import { Login } from "./pages/Login";
import "./index.css";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/context";
import { IdeasProvider } from "./lib/context/ideas";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <IdeasProvider>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
          </Routes>
        </main>
      </IdeasProvider>
    </UserProvider>
  );
}

export default App;

function Navbar() {
  const user = useUser();

  return (
    <nav className="flex place-items-center py-3 bg-slate-600 text-white justify-around  ">
      <Link to={"/"}>Idea tracker</Link>
      <div>
        {user.current ? (
          <div className="space-x-4">
            <span className="hover:cursor-text">{user.current.email}</span>
            <button
              className="bg-gray-500 py-2 px-4 rounded-xl hover:bg-gray-400"
              type="button"
              onClick={() => user.logout()}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/sign-in"}>Login</Link>
        )}
      </div>
    </nav>
  );
}
