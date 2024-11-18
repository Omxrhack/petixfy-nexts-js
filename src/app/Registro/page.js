// pages/register.js
'use client'

import '../globals.css'
import { useState } from 'react';

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    apellido_usuario: '',
    email: '',
    password: '',
    nombre_mascota: '',
    tipo_mascota: '',
    tipo_usuario: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Lógica para manejar el envío de datos
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Registro de Usuarios</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Nombre del Usuario</label>
            <input
              type="text"
              name="nombre_usuario"
              value={formData.nombre_usuario}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Apellido del Usuario</label>
            <input
              type="text"
              name="apellido_usuario"
              value={formData.apellido_usuario}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Tipo de Usuario</label>
            <select
              name="tipo_usuario"
              value={formData.tipo_usuario}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="0">Veterinario</option>
              <option value="1">Dueño de Mascota</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Nombre de la mascota</label>
            <input
              type="text"
              name="nombre_mascota"
              value={formData.nombre_mascota}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Tipo de mascota</label>
            <select
              name="tipo_mascota"
              value={formData.tipo_mascota}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
