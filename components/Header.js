// components/Header.js
import "../src/app/globals.css";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Header({ titulo_pantalla }) {
  return (
    <header className="bg-white flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">{titulo_pantalla}</h1>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 text-white rounded-full p-2">
          <FaUserCircle />
        </button>

        <button>
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
}
