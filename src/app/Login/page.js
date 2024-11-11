'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import '../globals.css'


export default function Login() {
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
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[70%] h-[70%] border-[2px] border-[#00A99E] p-8 rounded-lg flex">
        {/* Sección de la imagen */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/images/logo-black-pt-removebg.png"
            alt="Dog"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Línea divisoria */}
        <div className="w-px bg-[#00A99E] mx-4"></div>

        {/* Sección de inicio de sesión */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-4">¡Bienvenido!</h2>
          <form className=" text-center" onSubmit={handleClick}>
            <input
              name="email"
              value={loginData.email}
              type="email"
              placeholder="Email"
              required
              className="w-3/4 p-2 mb-4 border border-[#662d91] rounded"
              onChange={handleChange} 
            />
            <input
              name="password"
              value={loginData.password}
              type="password"
              required
              placeholder="Password"
              className="w-3/4 p-2 mb-4 border border-[#662d91] rounded"
              onChange={handleChange} 
            />
            <button
              type="submit"
              className="w-3/4 p-2 mt-2 bg-[#662d91] text-white rounded hover:bg-[#67358d]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
