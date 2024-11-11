"use client";

import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>
      <div className="p-5 relative z-10 text-center text-white flex flex-col justify-between	h-full">
        <h1 className="text-5xl font-bold text-center">
          Servicios Veterinarios
        </h1>
        <p className="text-lg text-center max-w-md">
          Encuentra servicios de calidad para el cuidado de tus mascotas. Desde
          consultas médicas hasta servicios de peliquería, todo en un solo
          lugar.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/Login")}
            className="px-6 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Iniciar Sesión
          </button>
          <button
           onClick={() => router.push("/Registro")}
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Registrarse
          </button>
        </div>
        <div className="relative bottom-0 left-0 right-0 text-center text-xs text-white">
          &copy; 2024 Petifix. Todos los derechos reservados.
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
}
