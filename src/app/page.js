/* eslint-disable @next/next/no-img-element */
'use client'

import "./globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link"

export default function Home() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({
      email: "",
      password: ""
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      });
    };
  

  const handleClick = (e) => {
    e.preventDefault()
    
    if (loginData.email == 'admin@admin' && loginData.password == 'adminpass') {
      router.push('/Dashboard')
    }
    
  }




  return (
    <div className="flex min-h-screen">
    <div className="flex-1 p-8 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Bienvenido de vuelta 👋</h1>
          <p className="text-gray-500">
            ¿Tu mascota ya la vacunaron?, ¡descubrelo!.
          </p>
        </div>
        <form className="space-y-4"  onSubmit={handleClick}>
          <div className="space-y-2 grid">
            <label htmlFor="email">Email</label>  
            <input
              name="email"
              placeholder="Ejemplo@ejemplo.com"
              required
              onChange={handleChange} 
              value={loginData.email}
              type="email"
              className="border-gray-500 border p-[8px] rounded-[4px]"
            />
            
          </div>
          <div className="space-y-2 grid">
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              placeholder="Contraseña"
              required
              value={loginData.password}
              onChange={handleChange} 
              type="password"
              className="border-gray-500 border p-[8px] rounded-[4px]"
            />
          </div>
          <div className="text-right">
            <Link
              className="text-sm text-gray-500 hover:text-gray-800"
              href="#"
            >
             ¿Has olvidado tu contraseña?
            </Link>
          </div>
          <button
           onClick={() => router.push("/DashboardV")}
           className="w-full h-[40px] bg-[#00a99d] hover:bg-[#00a99d]/70 text-[#ffffff]">
            Inicio de sesion
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">O</span>
            </div>
          </div>
          <button
            className="w-full bg-white text-black border border-gray-200 hover:bg-gray-50  flex justify-between h-[40px] items-center p-[7px]"
            variant="outline"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
            </svg>
            Registrate con Google
            <div/>
          </button>
          <button
            className="w-full bg-white text-black border border-gray-200 hover:bg-gray-50 flex justify-between h-[40px] items-center p-[7px]"
            variant="outline"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
            </svg>
            Registrate con Facebook
            <div/>
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          No tienes cuenta?{" "}
          <button 
          onClick={() => router.push("/Registro")}
          className="font-medium text-[#0F4229]" >
            Registrate
          </button>
        </div>
        <div className="text-center text-sm text-gray-500">
        &copy; 2024 Petifix. Todos los derechos reservados.
        </div>
      </div>
    </div>
    
  </div>
       
  );
}
