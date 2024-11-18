'use client'

import { useState } from "react";


export default function Dashboard() {
  const [usuario, setUsuario] = useState({
    id: 1,
    nombre: "Angel",
    apellido: "Gúzman"
  })
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bienvenido {usuario.nombre}</h2>

      <div>
        
      </div>
    </div>
  );
}
