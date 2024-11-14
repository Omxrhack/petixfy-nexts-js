// components/Sidebar.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/pt-logo-white.png';
import '../src/app/globals.css'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 flex-shrink-0">
      <div className="p-4 text-center content-center font-bold text-lg">
        <Image src={Logo}/>
      </div>
      <nav className="flex flex-col p-4">
        <Link href="/dashboard" className="py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
        <Link href="/pets" className="py-2 px-4 rounded hover:bg-gray-700">Mis Mascotas</Link>
        <Link href="/services" className="py-2 px-4 rounded hover:bg-gray-700">Servicios Veterinarios</Link>
        <Link href="/history" className="py-2 px-4 rounded hover:bg-gray-700">Historial</Link>
      </nav>
    </aside>
  );
}
