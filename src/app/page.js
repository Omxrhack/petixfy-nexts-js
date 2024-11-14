/* eslint-disable @next/next/no-img-element */
"use client";

import "./globals.css";
import { useRouter } from "next/navigation";
import  logo  from "../../public/images/.png";
export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen bg-[#00a99d]  items-center justify-center overflow-hidden">
     
      <div className="">
        <img src={logo} alt="Dog - Petixfy" />
      </div>
         {/*   <button
           onClick={() => router.push("/Registro")}
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Registrarse
          </button> */}



       
        <div className="relative bottom-0 left-0 right-0 text-center text-xs text-white">
          &copy; 2024 Petifix. Todos los derechos reservados.
        </div>
    </div>
  );
}
