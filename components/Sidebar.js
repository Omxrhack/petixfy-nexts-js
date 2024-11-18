// components/Sidebar.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/pt-logo-white.png';
import '../src/app/globals.css'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 flex-shrink-0">
      <div className="p-4 text-center content-center font-bold text-lg">
      </div>
      <nav className="flex flex-col p-4">
        <Link href="/dashboard" className="py-2 px-4 rounded hover:bg-gray-700">Inicio</Link>
        <Link href="/Clientes" className="py-2 px-4 rounded hover:bg-gray-700">Clientes</Link>
        <Link href="/Servicios" className="py-2 px-4 rounded hover:bg-gray-700">Servicios Veterinarios</Link>
        <Link href="/Citas" className="py-2 px-4 rounded hover:bg-gray-700">Citas</Link>
      </nav>
    </aside>
  );
}
