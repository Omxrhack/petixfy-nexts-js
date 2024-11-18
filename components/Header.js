// components/Header.js
import "../src/app/globals.css";
import moment from 'moment';
import 'moment/locale/es';
import Link from "next/link";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Header({ titulo_pantalla }) {

  moment.locale('es');
  const fullDate = moment().format('dddd, D [de] MMMM [de] YYYY');
// Resultado: "viernes, 17 de noviembre de 2024"
// 'dddd' muestra el día completo
  return (
    <header className="bg-white  border-b-[2px] border-[#00a99d] flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">{titulo_pantalla}</h1>
      <div className="flex items-center gap-4">
      <div>
      <h1>Hoy es: {fullDate}</h1>
    </div>
        <button className="bg-[#662d91] text-white rounded-full p-2">
          <FaUserCircle />
        </button>
      <Link href={'/'}><FaSignOutAlt /></Link>
      </div>
    </header>
  );
}
