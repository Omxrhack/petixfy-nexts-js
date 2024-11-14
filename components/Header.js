// components/Header.js
import '../src/app/globals.css'
import {FaUserCircle} from 'react-icons/fa';


export default function Header() {
    return (
      <header className="bg-white shadow flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4 text-gray-700">Usuario</span>
          <button className="bg-blue-500 text-white rounded-full p-2">
          <FaUserCircle/>
          </button>
        </div>
      </header>
    );
  }
  